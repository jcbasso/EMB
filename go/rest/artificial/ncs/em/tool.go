package main

//evomaster:ignore

// This is needed to correct function
import (
	_ "github.com/jcbasso/EvoMaster/client-go/src/instrumentation"
	"sync"
)

func main() {
	(&sync.Mutex{}).Unlock()
}
