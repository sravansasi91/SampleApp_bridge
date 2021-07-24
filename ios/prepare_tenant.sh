SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
DIR="$(dirname "$SCRIPT_DIR")"

 echo "not found tenant or config"
 echo "tenant : $1, config : $2"
 exit 1


# if [ "$1" != "" ] && [ "$2" != "" ]; then
#   tenant=$1
#   config=$2
# else
#   echo "not found tenant or config"
#   echo "tenant : $1, config : $2"
#   exit 1
# fi

# if [ ! -d "$DIR/config/$tenant/" ]; then
#  echo "#### Tenant specified does not exists ####"
#  echo "$DIR/config/$tenant/"
#  exit 1
# fi

# echo "tenant id : $tenant"
# echo "env : $config"
# echo "tenant directory : $DIR/config/$tenant/"


# #update index files
# NODE_COMMAND="$DIR/scripts/prebuild/update_assets_config.js $tenant"

# echo "executing node script"
# echo " node $NODE_COMMAND"

# /usr/local/bin/node $NODE_COMMAND

# if [ "$?" != "0" ];then
#  echo "node script failed";
#  exit 1
# fi
 
 
# # !!! this is very important for setting the right environment variables
# if [ "${CONFIGURATION}" == "production" ]; th 
#  echo "PROD"
#  echo "config/$tenant/.env.production" > /tmp/envfile

# elif [ "${config}" == "staging" ]; then 
#  echo "STAGING"
#  echo "config/$tenant/.env.staging" > /tmp/envfile

# elif [ "${config}" == "dev" ]; then 
#  echo "DEV"
#  echo "config/$tenant/.env.dev" > /tmp/envfile
# fi

# echo "Pre-build has executed successfully!"