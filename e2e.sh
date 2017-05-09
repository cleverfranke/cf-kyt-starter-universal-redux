# This script is used by Travis to execute end-to-end tests.

echo -e ">>> Building assets"
npm run build

echo -e ">>> Spinning up the node server"
npm run start &

# Save the PID of the server to a variable
APP_TEST_PID=$(echo $!)

echo -e ">>> Executing tests"
npm run test:e2e

# Save the exit code of the e2e tests to a variable
E2E_EXIT_CODE=$(echo $?)

echo -e ">>> Killing the node server"
kill $APP_TEST_PID

# Handle tests result
if [ $E2E_EXIT_CODE != 0 ]; then
  echo -e "\033[33;31m >>>>> e2e tests failed!"
  exit 1
else
  echo -e "\033[33;32m >>>>> e2e test are ok!"
fi
