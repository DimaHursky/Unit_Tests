import { IOffice } from '../../src/providers/OfficesProvider/OfficesProvider.types';

const offices: IOffice[] = [
  {
    slug: 'os-1',
    title: 'Outsource',
    logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgwIiBoZWlnaHQ9IjY1MCIgdmlld0JveD0iMCAwIDQ4MCA2NTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yNi41ODM0IDI0Ny45NDFDNDEuMjY1MSAyNDcuOTQxIDUzLjE2NjkgMjM2LjA5MSA1My4xNjY5IDIyMS40NzJDNTMuMTY2OSAyMDYuODU0IDQxLjI2NTEgMTk1LjAwMyAyNi41ODM0IDE5NS4wMDNDMTEuOTAxOCAxOTUuMDAzIDAgMjA2Ljg1NCAwIDIyMS40NzJDMCAyMzYuMDkxIDExLjkwMTggMjQ3Ljk0MSAyNi41ODM0IDI0Ny45NDFaIiBmaWxsPSIjRkZDNjEyIi8+CjxwYXRoIGQ9Ik02NS41NDQ4IDU2OC4xMDRDNTkuNTg2NCA1NzIuMjUzIDUxLjM3ODEgNTY3Ljk3OSA1MS4zNzgxIDU2MC43MTlWMzA0Ljk0N0M1MS4zNzgxIDI5MS4yOTcgNDAuMjk0NiAyODAuMjYyIDI2LjU4NjIgMjgwLjI2MkMxMi44Nzc4IDI4MC4yNjIgMS43OTQ0NCAyOTEuMjk3IDEuNzk0NDQgMzA0Ljk0N1Y2MjUuMjc0QzEuNzk0NDQgNjQ1LjIzIDI0LjMzNjIgNjU2LjkyOSA0MC43NTMgNjQ1LjUyTDQ2OS4zOCAzNDguMTM2QzQ4My41MDUgMzM4LjM0NCA0ODMuNTQ3IDMxNy41NTkgNDY5LjQ2MyAzMDcuNjg1TDQ2OS40MjIgMzA3LjY0M0M0NjAuODggMzAxLjY2OSA0NDkuNTA1IDMwMS42MjggNDQwLjk2MyAzMDcuNTZMNjUuNTQ0OCA1NjguMTA0WiIgZmlsbD0iI0ZGQzYxMiIvPgo8cGF0aCBkPSJNMzI2LjI5NiAyODguNkwxNDYuNzk1IDQxMy4xNDdDMTQwLjgzNyA0MTcuMjk1IDEzMi42MjggNDEzLjAyMiAxMzIuNjI4IDQwNS43NjJWMzQyLjMyN0MxMzIuNjI4IDMzNS4zMTUgMTM4LjMzNyAzMjkuNjMyIDE0NS4zNzggMzI5LjYzMkgxNTQuNDYyQzE2Ni44NzkgMzI5LjYzMiAxNzYuOTIgMzE5LjYzMyAxNzYuOTIgMzA3LjI3VjMwNC45NDZDMTc2LjkyIDI5MS4yOTcgMTY1Ljc5NSAyODAuMjIgMTUyLjA4NyAyODAuMjJIMTA0Ljc5NUM5Mi43NTMyIDI4MC4yMiA4Mi45NjE1IDI4OS45NjkgODIuOTYxNSAzMDEuOTU5VjUwMS4wNTlDODIuOTYxNSA1MDguMDcxIDkwLjg3ODIgNTEyLjE3OCA5Ni42MjgzIDUwOC4xNTRMNDAxLjk2MyAyOTYuMjc1QzQxNC40NjMgMjg3LjYwNCA0MTQuNTA1IDI2OS4xNDIgNDAyLjA0NiAyNjAuMzg4TDM2LjE2OTYgMy45OTM3NEMyMS43MTEyIC02LjEyOTI5IDEuNzk0NDQgNC4xNTk2OCAxLjc5NDQ0IDIxLjc1MDVWMjkuMDEwOUMxLjc5NDQ0IDM2LjEwNTMgNS4yNTI4IDQyLjcwMTkgMTEuMDQ0NSA0Ni43Njc3TDMyNi4zMzggMjY3LjY5QzMzMy41ODggMjcyLjg3NiAzMzMuNTQ2IDI4My41OCAzMjYuMjk2IDI4OC42WiIgZmlsbD0iI0ZGQzYxMiIvPgo8cGF0aCBkPSJNMzI2LjI5NiAyODguNkwxNDYuNzk1IDQxMy4xNDdDMTQwLjgzNyA0MTcuMjk1IDEzMi42MjggNDEzLjAyMiAxMzIuNjI4IDQwNS43NjJWMzQyLjMyN0MxMzIuNjI4IDMzNS4zMTUgMTM4LjMzNyAzMjkuNjMyIDE0NS4zNzggMzI5LjYzMkgxNTQuNDYyQzE2Ni44NzkgMzI5LjYzMiAxNzYuOTIgMzE5LjYzMyAxNzYuOTIgMzA3LjI3VjMwNC45NDZDMTc2LjkyIDI5MS4yOTcgMTY1Ljc5NSAyODAuMjIgMTUyLjA4NyAyODAuMjJIMTA0Ljc5NUM5Mi43NTMyIDI4MC4yMiA4Mi45NjE1IDI4OS45NjkgODIuOTYxNSAzMDEuOTU5VjUwMS4wNTlDODIuOTYxNSA1MDguMDcxIDkwLjg3ODIgNTEyLjE3OCA5Ni42MjgzIDUwOC4xNTRMNDAxLjk2MyAyOTYuMjc1QzQxNC40NjMgMjg3LjYwNCA0MTQuNTA1IDI2OS4xNDIgNDAyLjA0NiAyNjAuMzg4TDM2LjE2OTYgMy45OTM3NEMyMS43MTEyIC02LjEyOTI5IDEuNzk0NDQgNC4xNTk2OCAxLjc5NDQ0IDIxLjc1MDVWMjkuMDEwOUMxLjc5NDQ0IDM2LjEwNTMgNS4yNTI4IDQyLjcwMTkgMTEuMDQ0NSA0Ni43Njc3TDMyNi4zMzggMjY3LjY5QzMzMy41ODggMjcyLjg3NiAzMzMuNTQ2IDI4My41OCAzMjYuMjk2IDI4OC42WiIgZmlsbD0iI0ZGQzYxMiIvPgo8L3N2Zz4K',
  },
  {
    slug: 'os-3',
    title: 'Outsource Kyiv',
    logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgwIiBoZWlnaHQ9IjY1MCIgdmlld0JveD0iMCAwIDQ4MCA2NTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yNi41ODM0IDI0Ny45NDFDNDEuMjY1MSAyNDcuOTQxIDUzLjE2NjkgMjM2LjA5MSA1My4xNjY5IDIyMS40NzJDNTMuMTY2OSAyMDYuODU0IDQxLjI2NTEgMTk1LjAwMyAyNi41ODM0IDE5NS4wMDNDMTEuOTAxOCAxOTUuMDAzIDAgMjA2Ljg1NCAwIDIyMS40NzJDMCAyMzYuMDkxIDExLjkwMTggMjQ3Ljk0MSAyNi41ODM0IDI0Ny45NDFaIiBmaWxsPSIjRkZDNjEyIi8+CjxwYXRoIGQ9Ik02NS41NDQ4IDU2OC4xMDRDNTkuNTg2NCA1NzIuMjUzIDUxLjM3ODEgNTY3Ljk3OSA1MS4zNzgxIDU2MC43MTlWMzA0Ljk0N0M1MS4zNzgxIDI5MS4yOTcgNDAuMjk0NiAyODAuMjYyIDI2LjU4NjIgMjgwLjI2MkMxMi44Nzc4IDI4MC4yNjIgMS43OTQ0NCAyOTEuMjk3IDEuNzk0NDQgMzA0Ljk0N1Y2MjUuMjc0QzEuNzk0NDQgNjQ1LjIzIDI0LjMzNjIgNjU2LjkyOSA0MC43NTMgNjQ1LjUyTDQ2OS4zOCAzNDguMTM2QzQ4My41MDUgMzM4LjM0NCA0ODMuNTQ3IDMxNy41NTkgNDY5LjQ2MyAzMDcuNjg1TDQ2OS40MjIgMzA3LjY0M0M0NjAuODggMzAxLjY2OSA0NDkuNTA1IDMwMS42MjggNDQwLjk2MyAzMDcuNTZMNjUuNTQ0OCA1NjguMTA0WiIgZmlsbD0iI0ZGQzYxMiIvPgo8cGF0aCBkPSJNMzI2LjI5NiAyODguNkwxNDYuNzk1IDQxMy4xNDdDMTQwLjgzNyA0MTcuMjk1IDEzMi42MjggNDEzLjAyMiAxMzIuNjI4IDQwNS43NjJWMzQyLjMyN0MxMzIuNjI4IDMzNS4zMTUgMTM4LjMzNyAzMjkuNjMyIDE0NS4zNzggMzI5LjYzMkgxNTQuNDYyQzE2Ni44NzkgMzI5LjYzMiAxNzYuOTIgMzE5LjYzMyAxNzYuOTIgMzA3LjI3VjMwNC45NDZDMTc2LjkyIDI5MS4yOTcgMTY1Ljc5NSAyODAuMjIgMTUyLjA4NyAyODAuMjJIMTA0Ljc5NUM5Mi43NTMyIDI4MC4yMiA4Mi45NjE1IDI4OS45NjkgODIuOTYxNSAzMDEuOTU5VjUwMS4wNTlDODIuOTYxNSA1MDguMDcxIDkwLjg3ODIgNTEyLjE3OCA5Ni42MjgzIDUwOC4xNTRMNDAxLjk2MyAyOTYuMjc1QzQxNC40NjMgMjg3LjYwNCA0MTQuNTA1IDI2OS4xNDIgNDAyLjA0NiAyNjAuMzg4TDM2LjE2OTYgMy45OTM3NEMyMS43MTEyIC02LjEyOTI5IDEuNzk0NDQgNC4xNTk2OCAxLjc5NDQ0IDIxLjc1MDVWMjkuMDEwOUMxLjc5NDQ0IDM2LjEwNTMgNS4yNTI4IDQyLjcwMTkgMTEuMDQ0NSA0Ni43Njc3TDMyNi4zMzggMjY3LjY5QzMzMy41ODggMjcyLjg3NiAzMzMuNTQ2IDI4My41OCAzMjYuMjk2IDI4OC42WiIgZmlsbD0iI0ZGQzYxMiIvPgo8cGF0aCBkPSJNMzI2LjI5NiAyODguNkwxNDYuNzk1IDQxMy4xNDdDMTQwLjgzNyA0MTcuMjk1IDEzMi42MjggNDEzLjAyMiAxMzIuNjI4IDQwNS43NjJWMzQyLjMyN0MxMzIuNjI4IDMzNS4zMTUgMTM4LjMzNyAzMjkuNjMyIDE0NS4zNzggMzI5LjYzMkgxNTQuNDYyQzE2Ni44NzkgMzI5LjYzMiAxNzYuOTIgMzE5LjYzMyAxNzYuOTIgMzA3LjI3VjMwNC45NDZDMTc2LjkyIDI5MS4yOTcgMTY1Ljc5NSAyODAuMjIgMTUyLjA4NyAyODAuMjJIMTA0Ljc5NUM5Mi43NTMyIDI4MC4yMiA4Mi45NjE1IDI4OS45NjkgODIuOTYxNSAzMDEuOTU5VjUwMS4wNTlDODIuOTYxNSA1MDguMDcxIDkwLjg3ODIgNTEyLjE3OCA5Ni42MjgzIDUwOC4xNTRMNDAxLjk2MyAyOTYuMjc1QzQxNC40NjMgMjg3LjYwNCA0MTQuNTA1IDI2OS4xNDIgNDAyLjA0NiAyNjAuMzg4TDM2LjE2OTYgMy45OTM3NEMyMS43MTEyIC02LjEyOTI5IDEuNzk0NDQgNC4xNTk2OCAxLjc5NDQ0IDIxLjc1MDVWMjkuMDEwOUMxLjc5NDQ0IDM2LjEwNTMgNS4yNTI4IDQyLjcwMTkgMTEuMDQ0NSA0Ni43Njc3TDMyNi4zMzggMjY3LjY5QzMzMy41ODggMjcyLjg3NiAzMzMuNTQ2IDI4My41OCAzMjYuMjk2IDI4OC42WiIgZmlsbD0iI0ZGQzYxMiIvPgo8L3N2Zz4K',
  },
  {
    slug: 'os-2',
    title: 'Solutions',
    logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgwIiBoZWlnaHQ9IjY1MCIgdmlld0JveD0iMCAwIDQ4MCA2NTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yNi41ODM0IDI0Ny45NDFDNDEuMjY1MSAyNDcuOTQxIDUzLjE2NjkgMjM2LjA5MSA1My4xNjY5IDIyMS40NzJDNTMuMTY2OSAyMDYuODU0IDQxLjI2NTEgMTk1LjAwMyAyNi41ODM0IDE5NS4wMDNDMTEuOTAxOCAxOTUuMDAzIDAgMjA2Ljg1NCAwIDIyMS40NzJDMCAyMzYuMDkxIDExLjkwMTggMjQ3Ljk0MSAyNi41ODM0IDI0Ny45NDFaIiBmaWxsPSIjMDAzOUVEIi8+CjxwYXRoIGQ9Ik02NS41NDQ4IDU2OC4xMDRDNTkuNTg2NCA1NzIuMjUzIDUxLjM3ODEgNTY3Ljk3OSA1MS4zNzgxIDU2MC43MTlWMzA0Ljk0N0M1MS4zNzgxIDI5MS4yOTcgNDAuMjk0NiAyODAuMjYyIDI2LjU4NjIgMjgwLjI2MkMxMi44Nzc4IDI4MC4yNjIgMS43OTQ0NCAyOTEuMjk3IDEuNzk0NDQgMzA0Ljk0N1Y2MjUuMjc0QzEuNzk0NDQgNjQ1LjIzIDI0LjMzNjIgNjU2LjkyOSA0MC43NTMgNjQ1LjUyTDQ2OS4zOCAzNDguMTM2QzQ4My41MDUgMzM4LjM0NCA0ODMuNTQ3IDMxNy41NTkgNDY5LjQ2MyAzMDcuNjg1TDQ2OS40MjIgMzA3LjY0M0M0NjAuODggMzAxLjY2OSA0NDkuNTA1IDMwMS42MjggNDQwLjk2MyAzMDcuNTZMNjUuNTQ0OCA1NjguMTA0WiIgZmlsbD0iIzAwMzlFRCIvPgo8cGF0aCBkPSJNMzI2LjI5NiAyODguNkwxNDYuNzk1IDQxMy4xNDdDMTQwLjgzNyA0MTcuMjk1IDEzMi42MjggNDEzLjAyMiAxMzIuNjI4IDQwNS43NjJWMzQyLjMyN0MxMzIuNjI4IDMzNS4zMTUgMTM4LjMzNyAzMjkuNjMyIDE0NS4zNzggMzI5LjYzMkgxNTQuNDYyQzE2Ni44NzkgMzI5LjYzMiAxNzYuOTIgMzE5LjYzMyAxNzYuOTIgMzA3LjI3VjMwNC45NDZDMTc2LjkyIDI5MS4yOTcgMTY1Ljc5NSAyODAuMjIgMTUyLjA4NyAyODAuMjJIMTA0Ljc5NUM5Mi43NTMyIDI4MC4yMiA4Mi45NjE1IDI4OS45NjkgODIuOTYxNSAzMDEuOTU5VjUwMS4wNTlDODIuOTYxNSA1MDguMDcxIDkwLjg3ODIgNTEyLjE3OCA5Ni42MjgzIDUwOC4xNTRMNDAxLjk2MyAyOTYuMjc1QzQxNC40NjMgMjg3LjYwNCA0MTQuNTA1IDI2OS4xNDIgNDAyLjA0NiAyNjAuMzg4TDM2LjE2OTYgMy45OTM3NEMyMS43MTEyIC02LjEyOTI5IDEuNzk0NDQgNC4xNTk2OCAxLjc5NDQ0IDIxLjc1MDVWMjkuMDEwOUMxLjc5NDQ0IDM2LjEwNTMgNS4yNTI4IDQyLjcwMTkgMTEuMDQ0NSA0Ni43Njc3TDMyNi4zMzggMjY3LjY5QzMzMy41ODggMjcyLjg3NiAzMzMuNTQ2IDI4My41OCAzMjYuMjk2IDI4OC42WiIgZmlsbD0iIzAwMzlFRCIvPgo8cGF0aCBkPSJNMzI2LjI5NiAyODguNkwxNDYuNzk1IDQxMy4xNDdDMTQwLjgzNyA0MTcuMjk1IDEzMi42MjggNDEzLjAyMiAxMzIuNjI4IDQwNS43NjJWMzQyLjMyN0MxMzIuNjI4IDMzNS4zMTUgMTM4LjMzNyAzMjkuNjMyIDE0NS4zNzggMzI5LjYzMkgxNTQuNDYyQzE2Ni44NzkgMzI5LjYzMiAxNzYuOTIgMzE5LjYzMyAxNzYuOTIgMzA3LjI3VjMwNC45NDZDMTc2LjkyIDI5MS4yOTcgMTY1Ljc5NSAyODAuMjIgMTUyLjA4NyAyODAuMjJIMTA0Ljc5NUM5Mi43NTMyIDI4MC4yMiA4Mi45NjE1IDI4OS45NjkgODIuOTYxNSAzMDEuOTU5VjUwMS4wNTlDODIuOTYxNSA1MDguMDcxIDkwLjg3ODIgNTEyLjE3OCA5Ni42MjgzIDUwOC4xNTRMNDAxLjk2MyAyOTYuMjc1QzQxNC40NjMgMjg3LjYwNCA0MTQuNTA1IDI2OS4xNDIgNDAyLjA0NiAyNjAuMzg4TDM2LjE2OTYgMy45OTM3NEMyMS43MTEyIC02LjEyOTI5IDEuNzk0NDQgNC4xNTk2OCAxLjc5NDQ0IDIxLjc1MDVWMjkuMDEwOUMxLjc5NDQ0IDM2LjEwNTMgNS4yNTI4IDQyLjcwMTkgMTEuMDQ0NSA0Ni43Njc3TDMyNi4zMzggMjY3LjY5QzMzMy41ODggMjcyLjg3NiAzMzMuNTQ2IDI4My41OCAzMjYuMjk2IDI4OC42WiIgZmlsbD0iIzAwMzlFRCIvPgo8L3N2Zz4K',
  },
  {
    slug: 'sw-1',
    title: 'Software',
    logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgwIiBoZWlnaHQ9IjY1MCIgdmlld0JveD0iMCAwIDQ4MCA2NTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yNi41ODM0IDI0Ny45NDFDNDEuMjY1MSAyNDcuOTQxIDUzLjE2NjkgMjM2LjA5MSA1My4xNjY5IDIyMS40NzJDNTMuMTY2OSAyMDYuODU0IDQxLjI2NTEgMTk1LjAwMyAyNi41ODM0IDE5NS4wMDNDMTEuOTAxOCAxOTUuMDAzIDAgMjA2Ljg1NCAwIDIyMS40NzJDMCAyMzYuMDkxIDExLjkwMTggMjQ3Ljk0MSAyNi41ODM0IDI0Ny45NDFaIiBmaWxsPSIjMDBCMDg0Ii8+CjxwYXRoIGQ9Ik02NS41NDQ4IDU2OC4xMDRDNTkuNTg2NCA1NzIuMjUzIDUxLjM3ODEgNTY3Ljk3OSA1MS4zNzgxIDU2MC43MTlWMzA0Ljk0N0M1MS4zNzgxIDI5MS4yOTcgNDAuMjk0NiAyODAuMjYyIDI2LjU4NjIgMjgwLjI2MkMxMi44Nzc4IDI4MC4yNjIgMS43OTQ0NCAyOTEuMjk3IDEuNzk0NDQgMzA0Ljk0N1Y2MjUuMjc0QzEuNzk0NDQgNjQ1LjIzIDI0LjMzNjIgNjU2LjkyOSA0MC43NTMgNjQ1LjUyTDQ2OS4zOCAzNDguMTM2QzQ4My41MDUgMzM4LjM0NCA0ODMuNTQ3IDMxNy41NTkgNDY5LjQ2MyAzMDcuNjg1TDQ2OS40MjIgMzA3LjY0M0M0NjAuODggMzAxLjY2OSA0NDkuNTA1IDMwMS42MjggNDQwLjk2MyAzMDcuNTZMNjUuNTQ0OCA1NjguMTA0WiIgZmlsbD0iIzAwQjA4NCIvPgo8cGF0aCBkPSJNMzI2LjI5NiAyODguNkwxNDYuNzk1IDQxMy4xNDdDMTQwLjgzNyA0MTcuMjk1IDEzMi42MjggNDEzLjAyMiAxMzIuNjI4IDQwNS43NjJWMzQyLjMyN0MxMzIuNjI4IDMzNS4zMTUgMTM4LjMzNyAzMjkuNjMyIDE0NS4zNzggMzI5LjYzMkgxNTQuNDYyQzE2Ni44NzkgMzI5LjYzMiAxNzYuOTIgMzE5LjYzMyAxNzYuOTIgMzA3LjI3VjMwNC45NDZDMTc2LjkyIDI5MS4yOTcgMTY1Ljc5NSAyODAuMjIgMTUyLjA4NyAyODAuMjJIMTA0Ljc5NUM5Mi43NTMyIDI4MC4yMiA4Mi45NjE1IDI4OS45NjkgODIuOTYxNSAzMDEuOTU5VjUwMS4wNTlDODIuOTYxNSA1MDguMDcxIDkwLjg3ODIgNTEyLjE3OCA5Ni42MjgzIDUwOC4xNTRMNDAxLjk2MyAyOTYuMjc1QzQxNC40NjMgMjg3LjYwNCA0MTQuNTA1IDI2OS4xNDIgNDAyLjA0NiAyNjAuMzg4TDM2LjE2OTYgMy45OTM3NEMyMS43MTEyIC02LjEyOTI5IDEuNzk0NDQgNC4xNTk2OCAxLjc5NDQ0IDIxLjc1MDVWMjkuMDEwOUMxLjc5NDQ0IDM2LjEwNTMgNS4yNTI4IDQyLjcwMTkgMTEuMDQ0NSA0Ni43Njc3TDMyNi4zMzggMjY3LjY5QzMzMy41ODggMjcyLjg3NiAzMzMuNTQ2IDI4My41OCAzMjYuMjk2IDI4OC42WiIgZmlsbD0iIzAwQjA4NCIvPgo8cGF0aCBkPSJNMzI2LjI5NiAyODguNkwxNDYuNzk1IDQxMy4xNDdDMTQwLjgzNyA0MTcuMjk1IDEzMi42MjggNDEzLjAyMiAxMzIuNjI4IDQwNS43NjJWMzQyLjMyN0MxMzIuNjI4IDMzNS4zMTUgMTM4LjMzNyAzMjkuNjMyIDE0NS4zNzggMzI5LjYzMkgxNTQuNDYyQzE2Ni44NzkgMzI5LjYzMiAxNzYuOTIgMzE5LjYzMyAxNzYuOTIgMzA3LjI3VjMwNC45NDZDMTc2LjkyIDI5MS4yOTcgMTY1Ljc5NSAyODAuMjIgMTUyLjA4NyAyODAuMjJIMTA0Ljc5NUM5Mi43NTMyIDI4MC4yMiA4Mi45NjE1IDI4OS45NjkgODIuOTYxNSAzMDEuOTU5VjUwMS4wNTlDODIuOTYxNSA1MDguMDcxIDkwLjg3ODIgNTEyLjE3OCA5Ni42MjgzIDUwOC4xNTRMNDAxLjk2MyAyOTYuMjc1QzQxNC40NjMgMjg3LjYwNCA0MTQuNTA1IDI2OS4xNDIgNDAyLjA0NiAyNjAuMzg4TDM2LjE2OTYgMy45OTM3NEMyMS43MTEyIC02LjEyOTI5IDEuNzk0NDQgNC4xNTk2OCAxLjc5NDQ0IDIxLjc1MDVWMjkuMDEwOUMxLjc5NDQ0IDM2LjEwNTMgNS4yNTI4IDQyLjcwMTkgMTEuMDQ0NSA0Ni43Njc3TDMyNi4zMzggMjY3LjY5QzMzMy41ODggMjcyLjg3NiAzMzMuNTQ2IDI4My41OCAzMjYuMjk2IDI4OC42WiIgZmlsbD0iIzAwQjA4NCIvPgo8L3N2Zz4K',
  },
];

export default offices;
