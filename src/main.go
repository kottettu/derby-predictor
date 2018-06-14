package main

import (
	"github.com/labstack/echo"
	"github.com/kottettu/derby-predictor/src/handler"
)

func main() {
	// Echoのインスタンス作る
	e := echo.New()

	// 全てのリクエストで差し込みたいミドルウェア（ログとか）はここ
	//e.Use(middleware.Logger())
	//e.Use(middleware.Recover())

	e.File("/", "public/views/index.html")
	// ルーティング
	e.GET("/api/hello", handler.MainPage())

	e.GET("/api/test", func(c echo.Context) error { return c.JSON(200, "test") })

	// サーバー起動
	e.Start(":1323")    //ポート番号指定してね
}
