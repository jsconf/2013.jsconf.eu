#!/bin/sh
echo "cd ./_site"
cd ./_site
pwd
echo "Restore CNAME"
git checkout c111da4f3c1d92b73dc1023ff3a25fa375e939b9 CNAME
echo "Commit"
git commit -a -m Push
echo "Push"
git push origin gh-pages
echo "DONT FORGET TO PUSH THIS REPO AS WELL"