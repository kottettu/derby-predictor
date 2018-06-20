package main

import (
	_ "github.com/go-sql-driver/mysql"
	"github.com/gocraft/dbr"
	"github.com/labstack/echo"
	"net/http"
	"strconv"
	"github.com/kottettu/derby-predictor/src/handler"
	//"github.com/labstack/echo/engine/standard"
	//"github.com/labstack/echo/middleware"

)

// レスポンスを表す構造体を定義
type (
    userinfo struct {
        ID   int     `db:"id"`
        Email string  `db:"email"`
        First_name string  `db:"first_name"`
        Last_name string  `db:"last_name"`
    }

    userinfoJSON struct {
        ID   int     `json:"id"`
        Email string  `json:"email"`
        Firstname string  `json:"firstName"`
        Lastname string  `json:"lastName"`
    }

    responseData struct {
    Users        []userinfo      `json:"users"`
    }
)
var (
	tablename = "userinfo"
	seq   = 1
	conn, err = dbr.Open("mysql", "root:root@tcp(127.0.0.1:3306)/userinfo", nil)
	sess = conn.NewSession(nil)
)
//-------
//Handler
//-------

func insertUser(c echo.Context) error {
	u := new(userinfoJSON)
	if err := c.Bind(u); err != nil {
		return err
	}

	sess.InsertInto(tablename).Columns("id","email","first_name","last_name").Values(u.ID,u.Email,u.Firstname,u.Lastname).Exec()


	return c.NoContent(http.StatusOK)
}

func selectUsers(c echo.Context) error {
	var u []userinfo
	sess.Select("*").From(tablename).Load(&u)

	response := new(responseData)
	response.Users = u
	return c.JSON(http.StatusOK,response)
}
func selectUser(c echo.Context) error {
	var m userinfo
	id := c.Param("id")
	sess.Select("*").From(tablename).Where("id = ?", id).Load(&m)
	//idはPrimary Key属性のため重複はありえない。そのため一件のみ取得できる。そのため配列である必要はない
	return c.JSON(http.StatusOK,m)

}



func updateUser(c echo.Context) error {
	u := new(userinfoJSON)
	if err := c.Bind(u); err != nil {
		return err
	}

	attrsMap := map[string]interface{}{"id": u.ID, "email": u.Email , "first_name" : u.Firstname , "last_name" : u.Lastname}
	sess.Update(tablename).SetMap(attrsMap).Where("id = ?", u.ID).Exec()
	return c.NoContent(http.StatusOK)
}

func deleteUser(c echo.Context) error {
	id,_ := strconv.Atoi(c.Param("id"))

	sess.DeleteFrom(tablename).
		Where("id = ?", id).
		Exec()

	return c.NoContent(http.StatusNoContent)
}





func main() {
	// Echoのインスタンス作る
	e := echo.New()

	// 全てのリクエストで差し込みたいミドルウェア（ログとか）はここ
	//e.Use(middleware.Logger())
	//e.Use(middleware.Recover())

	e.Static("/", "public")
	// ルーティング
	e.GET("/api/hello", handler.MainPage())
	e.GET("/api/test", func(c echo.Context) error { return c.JSON(200, "test") })
	e.POST("/users/", insertUser)
	e.GET("/user/:id", selectUser)
	e.GET("/users/", selectUsers)
	e.PUT("/users/", updateUser)
	e.DELETE("/users/:id", deleteUser)

	// サーバー起動
	e.Start(":1323")    //ポート番号指定してね
}
