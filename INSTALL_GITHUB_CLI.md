# Install GitHub CLI

Run these commands in your terminal:

## Step 1: Install Homebrew (if not already installed)

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Follow the prompts and enter your password when asked.

## Step 2: Install GitHub CLI

```bash
brew install gh
```

## Step 3: Authenticate GitHub CLI

```bash
gh auth login
```

Follow the prompts to authenticate with GitHub.

## Step 4: Create and Push the Repo

Once authenticated, run these commands from the `debt-consolidation-demo` directory:

```bash
cd /Users/wkendall/Documents/GitHub/business-partner-demo/debt-consolidation-demo

# Create the repo on GitHub and push
gh repo create debt-consolidation-demo --public --source=. --remote=origin --push
```

Or if you want it private:

```bash
gh repo create debt-consolidation-demo --private --source=. --remote=origin --push
```

That's it! Your repo will be created and pushed to GitHub automatically.

