# Git HOL 1 - Basic Git Setup and Adding Files

## Steps:
1. **Setup Git Configuration**
```bash
git --version
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
git config --list
```

2. **Integrate Notepad++ as Default Editor**
```bash
git config --global core.editor "notepad++"
```

3. **Create a New Repository and Add File**
```bash
mkdir GitDemo && cd GitDemo
git init
echo "Welcome to Git" > welcome.txt
git add welcome.txt
git commit -m "Added welcome.txt"
git remote add origin <your-repo-url>
git push origin master
```
