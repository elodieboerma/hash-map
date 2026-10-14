// uncomment sections in main.js to see how each hashmap method works

// lengthOfArray does not decrease if a bucket has no nodes left because it still has a linked list head

    *1 (to run ESLint on any file or directory): npx eslint yourfile.js*
    *2 (to run Prettier on everything): npx prettier . --write
        (to run it on a certain directory): prettier --write app/
        (to run it on a certain file): prettier --write app/components/Button.js
        (to run it on tests): prettier --write "app/**/*.test.js"
    *3 (ensure everyone is using Pretter; if setup is CI; avoids merge conflicts/other collab issues):
        npx prettier . --check
