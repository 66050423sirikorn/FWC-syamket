# FWC-syamket

## Cell00 - Exercise 00

This repository contains the work for Cell00, Exercise 00.

## 1. Check Git installation

The following command was used in the VS Code PowerShell terminal to verify that Git was installed:

```powershell
git --version
```

## 2. Go to the user directory

The following command was used to go to the main user directory:

```powershell
cd C:\Users\Admin
```

## 3. Clone the GitHub repository

The repository was downloaded from GitHub to the computer using:

```powershell
git clone https://github.com/66050423sirikorn/FWC-syamket.git
```

## 4. Enter the cloned repository

The following command was used to enter the local repository:

```powershell
cd FWC-syamket
```

The repository status was checked using:

```powershell
git status
```

## 5. Create the exercise directories

The following commands were used to create the `cell00` and `ex00` directories:

```powershell
mkdir cell00
cd cell00
mkdir ex00
```

The following command was used to return to the main repository directory:

```powershell
cd ..
```

## 6. Create the .gitkeep file

Git does not upload an empty directory. Therefore, an empty `.gitkeep` file was created so that the `ex00` directory could appear on GitHub:

```powershell
New-Item cell00\ex00\.gitkeep -ItemType File
```

## 7. Check the directory structure

The directory structure was checked using:

```powershell
tree /f
```

The resulting structure is:

```text
FWC-syamket/
├── README.md
└── cell00/
    └── ex00/
        └── .gitkeep
```

## 8. Configure Git identity

Git required a username and email address before creating the first commit:

```powershell
git config --global user.name "66050423sirikorn"
git config --global user.email "GitHub account email"
```

The actual GitHub account email was entered in the terminal. It is not displayed in this README for privacy.

## 9. Add the work to Git

The following command was used to prepare the changed files:

```powershell
git add .
```

The status was checked using:

```powershell
git status
```

## 10. Commit the work

The following command was used to save the work in the local Git repository:

```powershell
git commit -m "Complete ex00"
```

## 11. Push the work to GitHub

The committed work was uploaded from the computer to the `main` branch on GitHub using:

```powershell
git push origin main
```

## Exercise 00 result

The required directory is:

```text
cell00/ex00/
```

The `ex00` directory is intentionally empty as required by the exercise. The `.gitkeep` file contains no code and is included only so that GitHub can display the empty directory.
