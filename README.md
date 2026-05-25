# IP Trademark Operations Suite

Wave:
- Portfolio next-20 completion batch

Source candidates represented:
- `AIIPTrademarkOperationsAssistant`
- `AIIPTrademarkOperationsOperations`
- `AIIPTrademarkOperationsAnalytics`
- `AIIPTrademarkOperationsWorkflow`

This suite is a runnable merged app with one login, one dashboard, one feature-first sidebar, PostgreSQL-backed records/documents/notifications/audit, role behavior, and smoke coverage.

## Local Run

```bash
cd /Users/erolakarsu/projects/merged/ip-trademark-operations-suite
./start.sh
```

Local URL:
- `http://127.0.0.1:5600`

Seeded users:
- `admin@ip-trademark-operations.local / admin123`
- `manager@ip-trademark-operations.local / manager123`
- `analyst@ip-trademark-operations.local / analyst123`

## Validation

```bash
cd /Users/erolakarsu/projects/merged/ip-trademark-operations-suite/frontend
npm run typecheck
SMOKE_BASE_URL=http://127.0.0.1:5600 npm run smoke
```
