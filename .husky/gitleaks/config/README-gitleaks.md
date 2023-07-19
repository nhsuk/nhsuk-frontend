# Setup (Mac \ Linux - once per laptop)

The easiest way is to to use homebrew, see installation steps here https://brew.sh/

In a terminal window...

- **brew install gitleaks**

---

# Setup (Windows - once per laptop)

- Download the gitleaks-windows ZIP relative to your device from here https://github.com/zricethezav/gitleaks/releases
- Unzip the file so you have access to **gitleaks.exe**
- Put the **gitleaks.exe** file into your **`C:\Windows\System32`**
- Check the Path in Environment Variables. If **`C:\Windows\System32`** is already set then you will not have to add anything. If not, please add a new path as **`C:\Windows\System32`**
- Windows Defender may try and stop you running it - you'll have to override this
- Open a command prompt/powershell and run **gitleaks version**. If you see a version number, it means the Gitleaks install is completed

---

# Expected behaviour

If everything is setup correctly, every time you run "**git commit ...**" Gitleaks should run and look for any possible secrets in the repo.

If none are detected your commit will go ahead as usual.

If Gitleaks does find any possible secrets, your commit will fail and Gitleaks will show you where it suspects secrets.
