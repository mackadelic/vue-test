#!/bin/bash
OLD_HOME=$HOME
export HOME=$OPENSHIFT_REPO_DIR
cd "${OPENSHIFT_REPO_DIR}"; node_modules/.bin/webpack -p
export HOME=$OLD_HOME