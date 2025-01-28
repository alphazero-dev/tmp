#!/bin/bash
#
# This script was designed for a blank Debian install
# Only dependencies are X.org (not automatically starting at boot),
# pulseaudio for sound support, ssh, plus any dependency required by
# AppImage - you can see them by trying to launch the AppImage manually
# before installing this auto-start script.
#
# Place "eDEX-UI.Linux.x86_64.AppImage" in the user folder
# $ chmod +x ~/launch.sh
# $ echo ~/launch.sh >> ~/.bashrc

count=$(ps aux | grep AppImage | wc -l)

if [ "$count" = "1" ]
then
	eval `ssh-agent` && ssh-add
	pulseaudio -D
	startx ~/eDEX-UI.Linux.x86_64.AppImage
fi