---
{"dg-publish":true,"permalink":"/aibn-tech-support/","dg-note-properties":{}}
---

## Spectrometer
https://www.bas.co.jp/
- UV/VIS/NIR spectrometer : 200-1025 nm


Your manual’s method can work **only if** the CAB in `C:\Windows` is the correct Windows 10 NetFx3 package for that exact build/architecture/language, and DISM can resolve it from that location. Your log shows it could not: `ResolveSource() unsuccessful` with `0x800f081f`. ([Microsoft Learn](https://learn.microsoft.com/en-us/troubleshoot/windows-client/application-management/dotnet-framework-35-installation-error?utm_source=chatgpt.com "NET Framework 3.5 installation errors - Windows Client"))

So the corrected diagnosis is:

- the **online** method failed because Windows Update access failed (`0x8024401C`)
- the **offline** method failed because the local CAB/payload you supplied was not accepted as a valid source for your installed Windows. Microsoft documents NetFx3 on Windows 10 as a **Feature on Demand**, where the binaries are not fully present until sourced from Windows Update or valid installation media / FoD content. ([Microsoft Learn](https://learn.microsoft.com/en-us/windows-hardware/manufacture/desktop/features-on-demand-v2--capabilities?view=windows-11&utm_source=chatgpt.com "Features On Demand"))

## What to do now

### Best fix: stop using the copied CAB and use matching Windows 10 media

On Windows 10, Microsoft’s supported offline method is to point DISM at the matching installation media’s `sources\sxs` folder. ([Microsoft Learn](https://learn.microsoft.com/en-us/dotnet/framework/install/dotnet-35-windows?utm_source=chatgpt.com "Install .NET Framework 3.5 on Windows 10"))

Use this:

```cmd
DISM /Online /Enable-Feature /FeatureName:NetFx3 /All /LimitAccess /Source:D:\sources\sxs
````

where `D:` is the mounted Windows 10 ISO.

Given your machine is build **19044**, use a Windows 10 x64 ISO matching that general release family, language, and edition as closely as possible. A mismatch is a common reason for `0x800f081f`. ([Microsoft Learn](https://learn.microsoft.com/en-us/windows-hardware/manufacture/desktop/deploy-net-framework-35-by-using-deployment-image-servicing-and-management--dism?view=windows-11&utm_source=chatgpt.com "Deploy .NET Framework 3.5 by using Deployment Image ..."))

### If you want to keep using the CAB approach

Then the likely problem is one of these:

- the CAB is the wrong architecture
- the CAB is from the wrong Windows 10 version/release
- the CAB is from different language media
- the manual’s `Netfx35.cab` is not the full/correct FoD package DISM expects on your specific build
- the CAB needs to be added as a package first, rather than only referenced as a generic `/Source` path

A practical test is this:

1. Put the CAB somewhere simple, for example:

```text
C:\Temp\Netfx35.cab
```

2. Try adding it explicitly:

```cmd
DISM /Online /Add-Package /PackagePath:C:\Temp\Netfx35.cab
```

3. Then enable the feature:

```cmd
DISM /Online /Enable-Feature /FeatureName:NetFx3 /All /LimitAccess
```

If `/Add-Package` rejects the CAB, that confirms the file itself is not the right package for this Windows install.

## Why the manual may still be failing on your PC

Vendor manuals often work only when their bundled CAB matches the Windows build they tested on. Your system is modern Windows 10 21H2/19044, and the vendor’s packaged CAB may be older or not appropriate for your installation. Microsoft’s current guidance remains to use Windows Features, Windows Update, or matching install media/FoD content. ([Microsoft Learn](https://learn.microsoft.com/en-us/dotnet/framework/install/dotnet-35-windows?utm_source=chatgpt.com "Install .NET Framework 3.5 on Windows 10"))

## Recommended sequence

Run these in order:

```cmd
DISM /Online /Cleanup-Image /RestoreHealth
sfc /scannow
```

Then mount a Windows 10 ISO and run:

```cmd
DISM /Online /Enable-Feature /FeatureName:NetFx3 /All /LimitAccess /Source:D:\sources\sxs
```