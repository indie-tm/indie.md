# Security Policy

## Reporting a vulnerability

If you discover a security vulnerability, please report it responsibly.

**Email:** security@indie.md

Please include:
- Description of the vulnerability
- Steps to reproduce
- Potential impact

We will acknowledge receipt within 48 hours and provide a timeline for a fix.

## Scope

indie.md is a static site with no server-side code, no database, no user authentication, and no API. The attack surface is limited to:

- Content injection via pull requests (mitigated by PR review)
- Dependency vulnerabilities (mitigated by Dependabot and minimal dependencies)
- GitHub Pages configuration

## Supported versions

Only the latest version deployed to main is supported.
