package handler

import (
	"github.com/labstack/echo"
	"net/http"
	_ "github.com/gocraft/dbr"
	_ "github.com/go-sql-driver/mysql"
)

func MainPage() echo.HandlerFunc {
	return func(c echo.Context) error {     //c をいじって Request, Responseを色々する
		return c.String(http.StatusOK, "Hey World")
	}
}

