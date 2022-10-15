package main

import (
	"fmt"
	"net/http"

	echo "github.com/aperturerobotics/starpc/echo"
	"github.com/aperturerobotics/starpc/srpc"
	"github.com/sirupsen/logrus"
)

func main() {
	mux := srpc.NewMux()

	echoServer := &echo.EchoServer{}
	if err := echo.SRPCRegisterEchoer(mux, echoServer); err != nil {
		logrus.Fatal(err.Error())
	}

	// listen at: ws://localhost:5050/demo
	server, err := srpc.NewHTTPServer(mux, "/demo")
	if err != nil {
		logrus.Fatal(err.Error())
	}

	fmt.Print("listening on :5050\n")
	if err := http.ListenAndServe(":5050", server); err != nil {
		logrus.Fatal(err.Error())
	}
}
