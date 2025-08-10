# Git HOL 4 - Merge Conflict Resolution

## Steps:
1. Create Branch and Make Changes:
```bash
git checkout -b GitWork
echo "Branch content" > hello.xml
git add hello.xml
git commit -m "Added hello.xml in branch"
```

2. Change in Master:
```bash
git checkout master
echo "Master content" > hello.xml
git add hello.xml
git commit -m "Added hello.xml in master"
```

3. Merge and Resolve Conflict:
```bash
git merge GitWork
# Resolve conflict in hello.xml
git add hello.xml
git commit -m "Resolved merge conflict"
```
