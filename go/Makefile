LAST_COMMIT := $(shell git log -1 --pretty=format:%h)
FULL_PATH?=/Users/juan.basso/Documents/University/thesis/EMB-golang/go
BIN?=${FULL_PATH}/bin
INSTRUMENTATION_BIN?=/Users/juan.basso/Documents/University/thesis/EvoMaster-golang/client-go/bin/instrumentation
MAX_TIME?=3m

# Benchmark
## Artificial
### NCS
.PHONY: ncs ncs/driver
ncs:
	cd rest/artificial/ncs && go run .

ncs/driver:
	cd rest/artificial/ncs/em && go run .

### Validations
.PHONY: ncs/instrumentation ncs/instrumentation/work ncs/instrumentation/work/x
NCS_PKG=github.com/jcbasso/EMB-golang/rest/artificial/ncs
NCS_RELATIVE_PATH=rest/artificial/ncs/em
NCS_BIN=${BIN}/ncs

ncs/instrumentation:
	go clean -cache
	$(shell test -f ${NCS_BIN} && rm ${NCS_BIN})
	cd ${NCS_RELATIVE_PATH} && go build -race -gcflags "all=-N -l" -a -toolexec '${INSTRUMENTATION_BIN} -path-prefix=${NCS_PKG}' -o=${NCS_BIN} .

ncs/instrumentation/work:
	go clean -cache
	$(shell test -f ${NCS_BIN} && rm ${NCS_BIN})
	cd ${NCS_RELATIVE_PATH} && GOPRIVATE=github.com/jcbasso/EvoMaster-golang/client-go/src/instrumentation go build -race -gcflags "all=-N -l" -a -toolexec '${INSTRUMENTATION_BIN} -path-prefix=${NCS_PKG}' -work -o=${NCS_BIN} .

ncs/instrumentation/work/x:
	go clean -cache
	$(shell test -f ${NCS_BIN} && rm ${NCS_BIN})
	cd ${NCS_RELATIVE_PATH} && go build -race -gcflags "all=-N -l" -a -toolexec '${INSTRUMENTATION_BIN} -path-prefix=${NCS_PKG}' -work -o=${NCS_BIN} -x .

.PHONY: ncs/mod
ncs/mod:
	cd ${NCS_RELATIVE_PATH} && GOPRIVATE=github.com/jcbasso/EvoMaster-golang/client-go/src/instrumentation go get github.com/jcbasso/EvoMaster-golang/client-go/src/instrumentation@${LAST_COMMIT}

### SCS
.PHONY: scs scs/driver
scs:
	cd rest/artificial/scs && go run .

scs/driver:
	cd rest/artificial/scs/em && go run .

### All
.PHONY: all
all: instrumentation ncs/mod ncs/instrumentation/work