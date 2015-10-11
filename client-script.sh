#!/bin/bash
# ¯\_(ツ)_/¯

cd /etc/NetworkManager/system-connections/
touch spark

echo "[connection]" >> spark
echo "id=spark" >> spark
echo "uuid=716041f8-350a-47aa-8b18-a8481a6f4b33" >> spark
echo "type=vpn" >> spark
echo "permissions=user:$USER:;" >> spark
echo "autoconnect=false" >> spark
echo "" >> spark
echo "[vpn]" >> spark
echo "service-type=org.freedesktop.NetworkManager.pptp" >> spark
echo "gateway=107.170.57.138" >> spark
echo "require-mppe=yes" >> spark
echo "user=spark" >> spark
echo "refuse-chap=yes" >> spark
echo "refuse-eap=yes" >> spark
echo "refuse-pap=yes" >> spark
echo "" >> spark
echo "[vpn-secrets]" >> spark
echo "password=secretkey" >> spark
echo "" >> spark
echo "[ipv4]" >> spark
echo "method=auto" >> spark

chmod 600 spark

nmcli con up id spark

