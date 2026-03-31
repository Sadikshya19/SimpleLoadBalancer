# A simple Load Balancer using Node.js/Express and http-proxy

client ---> LoadBalancer(PORT: 5000 i.e. reverse proxy) ---> Backend Servers (PORTs : 5001, 5002, 5003)

Handles in Round Robin order

Clients send requests to reverse proxy (loadbalancer 5000).
The reverse proxy receives requests and forwards them in round-robin to the 3 servers.
The client doesn’t know which server actually handled it.

Reverse proxy is used so that the client doesn’t know which server actually handled it.

for now,
need to run the servers localhost:5001, localhost:5002, localhost:5003 in each terminal,
everytime localhost:5000 is refreshed in browser, text shows which server actually handles the request.
