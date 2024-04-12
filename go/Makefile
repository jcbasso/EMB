LATEST_EVOMASTER_COMMIT := $(shell cd /Users/juan.basso/Documents/University/thesis/EvoMaster-golang/client-go/ && git log -1 --pretty=format:%h)
FULL_PATH?=/Users/juan.basso/Documents/University/thesis/EMB-golang/go
BIN?=${FULL_PATH}/bin
INSTRUMENTATION_BIN?=/Users/juan.basso/Documents/University/thesis/EvoMaster-golang/client-go/bin/instrumentation

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
NCS_PKG=github.com/jcbasso/EMB/go/rest/artificial/ncs
NCS_RELATIVE_PATH=rest/artificial/ncs
NCS_EM_RELATIVE_PATH=${NCS_RELATIVE_PATH}/em
NCS_BIN=${BIN}/ncs

ncs/instrumentation:
	go clean -cache
	$(shell test -f ${NCS_BIN} && rm ${NCS_BIN})
	cd ${NCS_EM_RELATIVE_PATH} && go build -race -gcflags "all=-N -l" -a -toolexec '${INSTRUMENTATION_BIN} -path-prefix=${NCS_PKG}' -o=${NCS_BIN} .

ncs/instrumentation/work:
	go clean -cache
	$(shell test -f ${NCS_BIN} && rm ${NCS_BIN})
	cd ${NCS_EM_RELATIVE_PATH} && GOPRIVATE=github.com/jcbasso/EvoMaster/client-go go build -race -gcflags "all=-N -l" -a -toolexec '${INSTRUMENTATION_BIN} -path-prefix=${NCS_PKG}' -work -o=${NCS_BIN} .

ncs/instrumentation/work/x:
	go clean -cache
	$(shell test -f ${NCS_BIN} && rm ${NCS_BIN})
	cd ${NCS_EM_RELATIVE_PATH} && go build -race -gcflags "all=-N -l" -a -toolexec '${INSTRUMENTATION_BIN} -path-prefix=${NCS_PKG}' -work -o=${NCS_BIN} -x .

.PHONY: ncs/mod
ncs/mod:
	cd ${NCS_EM_RELATIVE_PATH} && GOPRIVATE=github.com/jcbasso/EvoMaster/client-go go get github.com/jcbasso/EvoMaster/client-go@${LATEST_EVOMASTER_COMMIT}

.PHONY: ncs/test/cover
ncs/test/cover:
	cd ${NCS_RELATIVE_PATH} && go test -coverprofile=cover.out -coverpkg=./src/... ./generated_${lang}_${time}/... -outputdir=./generated_${lang}_${time}/; exit 0
	cd ${NCS_RELATIVE_PATH}/generated_${lang}_${time}/ && go tool cover -html cover.out -o cover.html
	cd ${NCS_RELATIVE_PATH} && go tool cover -func=./generated_${lang}_${time}/cover.out

.PHONY: ncs/test/diff
ncs/test/diff: $(eval SHELL=/bin/zsh)
	cd ${NCS_RELATIVE_PATH} && diff <(go tool cover -func=./generated_go_${time1}/cover.out) <(go tool cover -func=./generated_go_${time2}/cover.out) --color=always -u; exit 0

.PHONY: ncs/test/count
ncs/test/count:
	cd ${NCS_RELATIVE_PATH}/generated_go_${time}/ && /usr/bin/grep -roh Test_ . | wc -l

### SCS
.PHONY: scs scs/driver
scs:
	cd rest/artificial/scs && go run .

scs/driver:
	cd rest/artificial/scs/em && go run .

### All
.PHONY: all
all: ncs/mod ncs/instrumentation/work