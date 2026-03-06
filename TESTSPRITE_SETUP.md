# TestSprite setup for this project

Use this guide to install TestSprite MCP in Cursor and run tests on this portfolio.

## Prerequisites

- **Node.js ≥ 22** — Check with `node --version`
- **TestSprite account** — [Sign up free](https://www.testsprite.com/auth/cognito/sign-up)
- **Dev server running** — This app runs on **port 3006** (or 3005 if 3006 is busy).  
  Start it with: `npm run dev`

## 1. Get your TestSprite API key

1. Sign in at [TestSprite Dashboard](https://www.testsprite.com/dashboard)
2. Go to **Settings → API Keys**
3. Click **New API Key** and copy the key

## 2. Install TestSprite MCP in Cursor

**Option A — One-click (recommended)**  
Use the [one-click install link](https://docs.testsprite.com/mcp/getting-started/installation) from TestSprite docs, then enter your API key when Cursor asks.

**Option B — Manual**

1. Open **Cursor Settings** (e.g. `Ctrl+Shift+J` or **File → Preferences → Cursor Settings**)
2. Go to **Tools & Integration** (or **MCP**)
3. Click **Add custom MCP** and add:

```json
{
  "mcpServers": {
    "TestSprite": {
      "command": "npx",
      "args": ["@testsprite/testsprite-mcp@latest"],
      "env": {
        "API_KEY": "YOUR_API_KEY_HERE"
      }
    }
  }
}
```

Replace `YOUR_API_KEY_HERE` with your actual API key.

## 3. Cursor sandbox setting (important)

TestSprite needs to run outside Cursor’s sandbox:

1. **Cursor → Settings → Cursor Settings**
2. **Chat → Auto-Run → Auto-Run Mode**
3. Set to **“Ask Every time”** or **“Run Everything”**

## 4. Verify installation

- In Cursor MCP / Tools area, **TestSprite** should show a green dot (connected).
- In chat, you can ask: **“Help me test this project with TestSprite.”**  
  The AI should then use TestSprite tools to bootstrap and run tests.

## 5. Project config for TestSprite

When TestSprite runs, it will use something like:

| Setting       | Value |
|---------------|--------|
| **Type**      | `frontend` |
| **Local port**| `3006` (or `3005` if that’s what you see in terminal) |
| **Project path** | `c:\Users\HELIOS NEO 16\Downloads\anass-hlaibi---interactive-portfolio` |
| **Test scope**| `codebase` (full project) |

Keep **npm run dev** running so the app is available at `http://localhost:3006` (or 3005) when tests run.

## 6. Run tests

After TestSprite MCP is installed and connected:

1. Ensure `npm run dev` is running.
2. In Cursor chat, say: **“Help me test this project with TestSprite.”**

TestSprite will:

1. Bootstrap the test environment (port 3006, frontend)
2. Analyze the codebase and generate a code summary
3. Generate a standardized PRD and test plan
4. Generate and execute test code in the cloud
5. Produce reports under `testsprite_tests/` (e.g. `test_results.json`, HTML reports)

To fix failing tests, you can then ask: **“Help me fix the codebase based on these test results.”**

---

- Docs: [TestSprite MCP – Installation](https://docs.testsprite.com/mcp/getting-started/installation)  
- Create tests: [Create Tests for New Projects](https://docs.testsprite.com/mcp/core/create-tests-new-project)
