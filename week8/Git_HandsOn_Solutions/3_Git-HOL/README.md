# Git HOL 3 - Branching and Merging

## Steps:
1. Create a Branch:
```bash
git checkout -b GitNewBranch
echo "Branch File" > branch.txt
git add branch.txt
git commit -m "Added branch.txt in GitNewBranch"
```

2. Merge into Master:
```bash
git checkout master
git merge GitNewBranch
git branch -d GitNewBranch
```
