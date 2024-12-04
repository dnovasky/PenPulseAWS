terraform output -json | jq -r '@sh "VITE_PENPULSE_URL=\(.front_end_public_ip.value)\nVITE_LAMDA_URL=\(.lamda_url.value)\nVITE_CLIENT_ID=\(.clientId.value)\nVITE_USER_POOL_ID=\(.userPoolId.value)"' > ..\.env