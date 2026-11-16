# Agency Agents — CCM Procura TAGs

Project-specific agent profiles for maintenance-app development. These files configure compatible coding-agent clients; they do not launch agents, change Supabase, or publish the app by themselves.

## Profiles
- `architect.agent.md` — offline-first architecture and synchronization
- `fullstack.agent.md` — TAG search and mobile implementation
- `qa-security.agent.md` — testing, data integrity and security
- `industrial.agent.md` — industrial maintenance terminology and workflow review

## Working rules
1. Inspect the existing implementation before editing.
2. Preserve offline consultation and existing TAG data.
3. Never invent plant TAGs, technical limits or approved procedures.
4. Protect Supabase credentials and validate Row Level Security before database changes.
5. Add regression tests for search, import and synchronization; document rollback steps.