#!/usr/bin/env python3

EVOMASTER_VERSION = "3.0.0"

import sys
import os
import shutil
import platform
from shutil import copy
from shutil import copytree
from subprocess import run
from os.path import expanduser
import re

MAKE_ZIP = False
UPDATE = False

# handle maven
MAVEN_VERSION_REGEX = "\d{1,2}\\.\d{1,2}\\.\d{1,2}"
MAVEN_VERSION_ABOVE = "3.8.6"


def checkMavenVersion():
    mvn_path = shutil.which("mvn")
    if mvn_path == None:
        print("\nERROR: Cannot find maven with `which mvn`")
        exit(1)

    match = re.search(MAVEN_VERSION_REGEX, mvn_path)
    if match == None:
        print("\nCannot determine mvn version from its path location: " + mvn_path)
#        might happen depending on installation path... instead of crashing immediately,
#        we try to build, as it might be the correct version... if not, it will fail anyway
#  TODO ideally, should rather use "mvn -v" to determine the version number...
#  although it would be bit tricky to implement (so not super important)
        return True
#         exit(1)

    mvn_txt = match.group()
    mvn_version = mvn_txt.split(".")

    print("\nDetected mvn version based on its path location: " + mvn_txt)

    above = MAVEN_VERSION_ABOVE.split(".")
    for index, v in enumerate(mvn_version):
        if int(above[index]) < int(v):
            return True
        elif int(above[index]) > int(v):
            return False

    return True #  same


if not checkMavenVersion():
    print("\nERROR: Maven version must be " + MAVEN_VERSION_ABOVE + "or above in order to successfully compile all Web "
                                                                    "APIs in EMB")
    exit(1)

if len(sys.argv) > 1:
    MAKE_ZIP = "zip" in sys.argv
    UPDATE = "update" in sys.argv

### Environment variables ###

HOME = expanduser("~")
SCRIPT_LOCATION = os.path.dirname(os.path.realpath(__file__))
PROJ_LOCATION = os.path.abspath(os.path.join(SCRIPT_LOCATION, os.pardir))

JAVA_HOME_8 = os.environ.get('JAVA_HOME_8', '')
JAVA_HOME_11 = os.environ.get('JAVA_HOME_11', '')
JAVA_HOME_17 = os.environ.get('JAVA_HOME_17', '')

SHELL = platform.system() == 'Windows'

DIST = os.path.join(PROJ_LOCATION, "dist")


##################################################
def checkJavaVersions():
    if JAVA_HOME_8 == '':
        print("\nERROR: JAVA_HOME_8 environment variable is not defined")
        exit(1)

    if JAVA_HOME_11 == '':
        print("\nERROR: JAVA_HOME_11 environment variable is not defined")
        exit(1)

    if JAVA_HOME_17 == '':
        print("\nERROR: JAVA_HOME_17 environment variable is not defined")
        exit(1)


######################################
### Prepare "dist" folder ###
def prepareDistFolder():
    if os.path.exists(DIST):
        shutil.rmtree(DIST)

    os.mkdir(DIST)


def callMaven(folder, jdk_home):
    env_vars = os.environ.copy()
    env_vars["JAVA_HOME"] = jdk_home

    mvnres = run(["mvn", "clean", "install", "-DskipTests"], shell=SHELL, cwd=os.path.join(PROJ_LOCATION, folder),
                 env=env_vars)
    mvnres = mvnres.returncode

    if mvnres != 0:
        print("\nERROR: Maven command failed")
        exit(1)


### Building Maven JDK 8 projects ###
def build_jdk_8_maven():
    folder = "jdk_8_maven"
    callMaven(folder, JAVA_HOME_8)

    # Copy JAR files
    copy(folder + "/cs/rest/original/features-service/target/features-service-sut.jar", DIST)
    copy(folder + "/em/external/rest/features-service/target/features-service-evomaster-runner.jar", DIST)

    copy(folder + "/cs/rest/original/scout-api/api/target/scout-api-sut.jar", DIST)
    copy(folder + "/em/external/rest/scout-api/target/scout-api-evomaster-runner.jar", DIST)

    copy(folder + "/cs/rest/original/proxyprint/target/proxyprint-sut.jar", DIST)
    copy(folder + "/em/external/rest/proxyprint/target/proxyprint-evomaster-runner.jar", DIST)

    copy(folder + "/cs/rest/original/catwatch/catwatch-backend/target/catwatch-sut.jar", DIST)
    copy(folder + "/em/external/rest/catwatch/target/catwatch-evomaster-runner.jar", DIST)

    copy(folder + "/cs/rest/artificial/ncs/target/rest-ncs-sut.jar", DIST)
    copy(folder + "/em/external/rest/ncs/target/rest-ncs-evomaster-runner.jar", DIST)

    copy(folder + "/cs/rest/artificial/scs/target/rest-scs-sut.jar", DIST)
    copy(folder + "/em/external/rest/scs/target/rest-scs-evomaster-runner.jar", DIST)

    copy(folder + "/cs/rest/artificial/news/target/rest-news-sut.jar", DIST)
    copy(folder + "/em/external/rest/news/target/rest-news-evomaster-runner.jar", DIST)

    copy(folder + "/cs/rest-gui/ocvn/web/target/ocvn-rest-sut.jar", DIST)
    copy(folder + "/em/external/rest/ocvn/target/ocvn-rest-evomaster-runner.jar", DIST)

    copy(folder + "/cs/rest/original/languagetool/languagetool-server/target/languagetool-sut.jar", DIST)
    copy(folder + "/em/external/rest/languagetool/target/languagetool-evomaster-runner.jar", DIST)

    copy(folder + "/cs/rest/original/restcountries/target/restcountries-sut.jar", DIST)
    copy(folder + "/em/external/rest/restcountries/target/restcountries-evomaster-runner.jar", DIST)

    copy(folder + "/cs/rest/original/session-service/target/session-service-sut.jar", DIST)
    copy(folder + "/em/external/rest/session-service/target/session-service-evomaster-runner.jar", DIST)

    copy(folder + "/cs/rest-gui/gestaohospital/target/gestaohospital-rest-sut.jar", DIST)
    copy(folder + "/em/external/rest/gestaohospital/target/gestaohospital-rest-evomaster-runner.jar", DIST)

    copy(folder + "/cs/rest-gui/genome-nexus/web/target/genome-nexus-sut.jar", DIST)
    copy(folder + "/em/external/rest/genome-nexus/target/genome-nexus-evomaster-runner.jar", DIST)

    copy(folder + "/cs/graphql/petclinic-graphql/target/petclinic-graphql-sut.jar", DIST)
    copy(folder + "/em/external/graphql/petclinic-graphql/target/petclinic-graphql-evomaster-runner.jar", DIST)

    copy(folder + "/cs/graphql/graphql-ncs/target/graphql-ncs-sut.jar", DIST)
    copy(folder + "/em/external/graphql/graphql-ncs/target/graphql-ncs-evomaster-runner.jar", DIST)

    copy(folder + "/cs/graphql/graphql-scs/target/graphql-scs-sut.jar", DIST)
    copy(folder + "/em/external/graphql/graphql-scs/target/graphql-scs-evomaster-runner.jar", DIST)

    # thrift RPC
    copy(folder + "/cs/rpc/thrift/artificial/thrift-ncs/target/rpc-thrift-ncs-sut.jar", DIST)
    copy(folder + "/em/external/thrift/ncs/target/rpc-thrift-ncs-evomaster-runner.jar", DIST)

    copy(folder + "/cs/rpc/thrift/artificial/thrift-scs/target/rpc-thrift-scs-sut.jar", DIST)
    copy(folder + "/em/external/thrift/scs/target/rpc-thrift-scs-evomaster-runner.jar", DIST)

    # grpc RPC
    copy(folder + "/cs/rpc/grpc/artificial/grpc-ncs/target/rpc-grpc-ncs-sut.jar", DIST)
    copy(folder + "/em/external/grpc/ncs/target/rpc-grpc-ncs-evomaster-runner.jar", DIST)

    copy(folder + "/cs/rpc/grpc/artificial/grpc-scs/target/rpc-grpc-scs-sut.jar", DIST)
    copy(folder + "/em/external/grpc/scs/target/rpc-grpc-scs-evomaster-runner.jar", DIST)

    ind0 = os.environ.get('SUT_LOCATION_IND0', '')
    if ind0 == '':
        print("\nWARN: SUT_LOCATION_IND0 env variable is not defined")
    else:
        copy(ind0, os.path.join(DIST, "ind0-sut.jar"))
        copy(folder + "/em/external/rest/ind0/target/ind0-evomaster-runner.jar", DIST)


####################
def build_jdk_11_maven():
    folder = "jdk_11_maven"
    callMaven(folder, JAVA_HOME_11)

    copy(folder + "/cs/rest/cwa-verification-server/target/cwa-verification-sut.jar", DIST)
    copy(folder + "/em/external/rest/cwa-verification/target/cwa-verification-evomaster-runner.jar", DIST)

    copy(folder + "/cs/graphql/timbuctoo/timbuctoo-instancev4/target/timbuctoo-sut.jar", DIST)
    copy(folder + "/em/external/graphql/timbuctoo/target/timbuctoo-evomaster-runner.jar", DIST)

    copy(folder + "/cs/rest-gui/market/market-rest/target/market-sut.jar", DIST)
    copy(folder + "/em/external/rest/market/target/market-evomaster-runner.jar", DIST)

    ind1 = os.environ.get('SUT_LOCATION_IND1', '')
    if ind1 == '':
        print("\nWARN: SUT_LOCATION_IND1 env variable is not defined")
    else:
        copy(ind1, os.path.join(DIST, "ind1-sut.jar"))
        copy(folder + "/em/external/rest/ind1/target/ind1-evomaster-runner.jar", DIST)


####################
def build_jdk_17_maven():
    folder = "jdk_17_maven"
    callMaven(folder, JAVA_HOME_17)

    copy(folder + "/cs/web/spring-petclinic/target/spring-petclinic-sut.jar", DIST)
    copy(folder + "/em/external/web/spring-petclinic/target/spring-petclinic-evomaster-runner.jar", DIST)


    copy(folder + "/cs/grpc/signal-registration/target/signal-registration-sut.jar", DIST)
    copy(folder + "/em/external/grpc/signal-registration/target/signal-registration-evomaster-runner.jar", DIST)


####################
def build_jdk_11_gradle():
    env_vars = os.environ.copy()
    env_vars["JAVA_HOME"] = JAVA_HOME_11
    folder = "jdk_11_gradle"

    command = "gradlew"

    if platform.system() == "Darwin":
        command = "./gradlew"

    gradleres = run([command, "build", "-x", "test"], shell=SHELL, cwd=os.path.join(PROJ_LOCATION, folder),
                    env=env_vars)
    gradleres = gradleres.returncode

    if gradleres != 0:
        print("\nERROR: Gradle command failed")
        exit(1)

    # Copy JAR files
    copy(folder + "/cs/graphql/patio-api/build/libs/patio-api-sut.jar", DIST)
    copy(folder + "/em/external/graphql/patio-api/build/libs/patio-api-evomaster-runner.jar", DIST)
    copy(folder + "/cs/rest/reservations-api/build/libs/reservations-api-sut.jar", DIST)
    copy(folder + "/em/external/rest/reservations-api/build/libs/reservations-api-evomaster-runner.jar", DIST)

####################
def build_jdk_17_gradle():
    env_vars = os.environ.copy()
    env_vars["JAVA_HOME"] = JAVA_HOME_17
    folder = "jdk_17_gradle"

    command = "gradlew"

    if platform.system() == "Darwin":
        command = "./gradlew"

    gradleres = run([command, "build", "-x", "test"], shell=SHELL, cwd=os.path.join(PROJ_LOCATION, folder),
                    env=env_vars)
    gradleres = gradleres.returncode

    if gradleres != 0:
        print("\nERROR: Gradle command failed")
        exit(1)

    # Copy JAR files
    copy(folder + "/cs/rest/bibliothek/build/libs/bibliothek-sut.jar", DIST)
    copy(folder + "/em/external/rest/bibliothek/build/libs/bibliothek-evomaster-runner.jar", DIST)


# Building JavaScript projects
def buildJS(path, name):
    print("Building '" + name + "' from " + path)
    # we use "ci" instead of "install" due to major flaws in NPM
    res = run(["npm", "ci"], shell=SHELL, cwd=path).returncode
    if res != 0:
        print("\nERROR installing packages with NPM in " + path)
        exit(1)
    res = run(["npm", "run", "em:build"], shell=SHELL, cwd=path).returncode
    if res != 0:
        print("\nERROR when building " + path)
        exit(1)

    target = os.path.join(DIST, name)
    # shutil.make_archive(base_name=target, format='zip', root_dir=path+"/..", base_dir=name)
    copytree(path, target)


####################
def build_js_npm():
    buildJS(os.path.abspath(os.path.join(PROJ_LOCATION, "js_npm", "rest", "ncs")), "js-rest-ncs")
    buildJS(os.path.abspath(os.path.join(PROJ_LOCATION, "js_npm", "rest", "scs")), "js-rest-scs")
    buildJS(os.path.abspath(os.path.join(PROJ_LOCATION, "js_npm", "rest", "cyclotron")), "cyclotron")
    buildJS(os.path.abspath(os.path.join(PROJ_LOCATION, "js_npm", "rest", "disease-sh-api")), "disease-sh-api")
    buildJS(os.path.abspath(os.path.join(PROJ_LOCATION, "js_npm", "rest", "realworld-app")), "realworld-app")
    buildJS(os.path.abspath(os.path.join(PROJ_LOCATION, "js_npm", "rest", "spacex-api")), "spacex-api")
    buildJS(os.path.abspath(os.path.join(PROJ_LOCATION, "js_npm", "graphql", "react-finland")), "react-finland")
    buildJS(os.path.abspath(os.path.join(PROJ_LOCATION, "js_npm", "graphql", "ecommerce-server")), "ecommerce-server")


####################
def build_dotnet_3():
    env_vars = os.environ.copy()
    folder = "dotnet_3"

    dotnet = run(["dotnet", "build"], shell=SHELL, cwd=os.path.join(PROJ_LOCATION, folder), env=env_vars)

    if dotnet.returncode != 0:
        print("\nERROR: .Net command failed")
        exit(1)

    rest = os.path.join(PROJ_LOCATION, "dotnet_3", "em", "embedded", "rest")

    ncs = os.path.abspath(os.path.join(rest, "NcsDriver", "bin", "Debug", "netcoreapp3.1"))
    scs = os.path.abspath(os.path.join(rest, "ScsDriver", "bin", "Debug", "netcoreapp3.1"))
    sampleproject = os.path.abspath(os.path.join(rest, "SampleProjectDriver", "bin", "Debug", "netcoreapp3.1"))
    menuapi = os.path.abspath(os.path.join(rest, "MenuAPIDriver", "bin", "Debug", "netcoreapp3.1"))

    copytree(ncs, os.path.join(DIST, "cs-rest-ncs"))
    copytree(scs, os.path.join(DIST, "cs-rest-scs"))
    copytree(sampleproject, os.path.join(DIST, "sampleproject"))
    copytree(menuapi, os.path.join(DIST, "menu-api"))


######################################################################################
### Copy JavaAgent library ###
## This requires EvoMaster to be "mvn install"ed on your machine
def copyEvoMasterAgent():
    copy(HOME + "/.m2/repository/org/evomaster/evomaster-client-java-instrumentation/"
         + EVOMASTER_VERSION + "/evomaster-client-java-instrumentation-"
         + EVOMASTER_VERSION + ".jar",
         os.path.join(DIST, "evomaster-agent.jar"))


######################################################################################
### Create Zip file with all the SUTs and Drivers ###
def makeZip():
    zipName = "dist.zip"
    if os.path.exists(zipName):
        os.remove(zipName)

    print("Creating " + zipName)
    shutil.make_archive(base_name=DIST, format='zip', root_dir=DIST + "/..", base_dir='dist')


#####################################################################################
### Build the different modules ###

if UPDATE:
    print("Updating EvoMaster JavaAgent")
    copyEvoMasterAgent()
    exit(0)

checkJavaVersions()

prepareDistFolder()

build_jdk_8_maven()
build_jdk_11_maven()
build_jdk_17_maven()
build_jdk_11_gradle()
build_jdk_17_gradle()

## Those are disabled for now... might support back in the future
# build_js_npm()
# build_dotnet_3()


copyEvoMasterAgent()

if MAKE_ZIP:
    makeZip()

######################################################################################
## If we arrive here, it means everything worked fine, with no exception
print("\n\nSUCCESS\n\n")
