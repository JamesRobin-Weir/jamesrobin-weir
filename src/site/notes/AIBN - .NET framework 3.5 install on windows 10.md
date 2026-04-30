---
{"dg-publish":true,"permalink":"/aibn-net-framework-3-5-install-on-windows-10/","dg-note-properties":{}}
---

# .NET framework 3.5 install on windows 10

In order to get a spectrometer working in the lab, it is necessary to install legacy windows .NET modules. The following method works as of April 2026.
## Spectrometer references
- https://www.bas.co.jp/
- https://www.als-japan.com/dlc/manual/sec2020_manual/sec2020_user_guide_software_en_ver270.pdf
- UV/VIS/NIR spectrometer : 200-1025 nm

Working install method for .NET framework 3.5 on windows 10 enterprise :

1. Download a copy of a windows iso corresponding to your system version (Windows 10 Enterprise for me)
2. Open an administrator console and run the following command: DISM /Online /Cleanup-Image /RestoreHealth
3. Once completed run this command: sfc /scannow
4. Mount the iso as a drive on your system using right mouse click 
5. Similar to the manual, run the following (taking care to replace the "`E" in the /Source: argument by the letter of the drive of the mounted iso on your system): DISM /Online /Enable-Feature /FeatureName:NetFx3 /All /LimitAccess /Source:E:\sources\sxs`

All other methods of install tested were non-functional, including all those in the user guide you sent me, and this on 4 different computer systems.

---