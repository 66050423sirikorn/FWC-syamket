cd ~/FWC-syamket
git pull origin main
cd cell00
mkdir ex01
cd ex01
printf "Z\n" > z
ls -la
cat z
cat -e z
cd ../..
git status
git add cell00/ex01/z
git status
git commit -m "Complete ex01"
git push origin main
