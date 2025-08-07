# Understanding package.json and node_modules

## Define
- package.json: A file that defines project metadata and manages dependencies
- node_modules: A directory that stores all project dependencies locally

## package.json
- Main configuration file for Node.js projects
- Contains project metadata and dependencies
- Manages scripts and project settings
- Created using `npm init` or `npm init -y`

### Key sections:
```json
{
    "name": "project-name",
    "version": "1.0.0",
    "dependencies": {},
    "devDependencies": {}
}
```

## node_modules
- Directory containing all installed packages
- Created when running `npm install`
- Should be added to `.gitignore`
- Can be recreated using package.json and `npm install`

### Best Practices:
1. Always include package.json in version control
2. Use `npm install --save` for runtime dependencies
3. Use `npm install --save-dev` for development dependencies
4. Lock dependencies with package-lock.json

## Dependencies Management

### Runtime Dependencies
- Required for application to run in production
- Installed using `npm install <package>`
- Listed in `dependencies` section
- Example: Express, React, Lodash

### Development Dependencies
- Only needed during development
- Installed using `npm install --save-dev <package>`
- Listed in `devDependencies` section
- Example: Testing frameworks, Build tools, Linters

### Managing Versions
- Semantic versioning (SemVer): MAJOR.MINOR.PATCH
- Version ranges using `^` (minor updates) or `~` (patch updates)
- Exact versions using specific numbers
- `latest` tag for newest version

## Package Lock JSON
- Automatically generated file that locks dependency versions
- Ensures consistent installations across different environments
- Contains exact versions of all installed packages
- Includes dependency tree and integrity checksums

### Purpose:
1. Reproducible builds across team members
2. Prevents "works on my machine" issues
3. Guards against dependency changes
4. Improves installation speed

### Key Features:
```json
{
    "name": "project",
    "version": "1.0.0",
    "lockfileVersion": 2,
    "requires": true,
    "dependencies": {
        "package-name": {
            "version": "1.2.3",
            "resolved": "https://registry.npmjs.org/...",
            "integrity": "sha512..."
        }
    }
}
```