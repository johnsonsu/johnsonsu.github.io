---
title: "MacOS Reinstall"
date: "2020-02-22"
---

# MacOS Reinstall

In case you wiped your Mac's hard disk or erased it's partition map (like me), don't panic.

The bad news is if you don't have your data backed up before, you probably lost them all already (Unless you pay some expensive data recovery company to help you salvage them). However, the good news is, you can have a fresh macOS on your machine soon.

## 1. Download the macOS installer

If you search online, you will probably find a bunch of guides that tell you to grab the full macOS installer from AppStore. This only works if you have a working Mac that still run a older version of the macOS version you want to install. For example, if you want to install High Sierra (10.13), you need a mac that's running on Sierra (10.12). Which I wasn't, and probably you aren't.

So to get the macOS installer, your best chance is to torrent it from some torrent site. Of course, depending on where you live and the laws, it might be illegal to do so. So I can't help you more here but it shouldn't be hard if you have the right keywords to search.

## 2. Create bootable installer for macOS

You can follow this official guide from apple, it's very informative and covers all the cases:
[https://support.apple.com/en-ca/HT201372](https://support.apple.com/en-ca/HT201372)

## 3. Mounting the missing hard disk

With all those task done, **plug in** your bootable USB into your Mac and **power it up**. Your mac should load the recovery utility in the USB without any keyboard press because your hard disk is wiped.

In the recovery utility, select Disk Utility. You want to make sure your `disk0` which is your hard disk is listed. It's should be at least 500GB for most iMac. It's definitely not the 32 GB or even smaller drive, that's your bootable installer USB. If you can see it in Disk Utility, go to the next step. If not, read on.

If it is not visible, which is possible because we wiped it, you need to fire up Terminal. You can do so by going to the menu bar at the top of the screen > Utilities > Terminal. Then type the command:

    diskutil list

If you can see `disk0` listed in the output, you can mount it by entering the following command:

    diskutil mountDisk 0

This should do the job and you can verify by quitting terminal and go back to DiskUtility.

If you cannot mount the drive or the drive is simply not listed in `diskutil list`, then you probably have a hardware issue and hardware replacement is needed.

## 4. Erase the hard disk

Since we are doing a fresh installation, we need to erase the disk and start new. Yes, you will lose 100% of your data after this step.

You can do this using Disk Utility. Make double, triple sure that you selected your disk0 on the left sidebar. Click "Erase" at the top. Name it "Macintosh HD" and select APFS for the format option. Finally click Erase and this will reformat the hard disk.

You can quit the Disk Utility app after it's done formatting.

## 5. Install macOS

Click Install macOS in the recovery menu.

Depending on how you got your macOS installation image, you might get the error "This copy on the Install macOS High Sierra.app application is damaged and can't be used to install macOS" or similar.

This is because there is a certificate/signature of Apple contained inside the installer, and it is out of date compare to our Mac's date.

We can by pass this by firing up Terminal once again, then type the following:

    date 121501012018

The format of the date `[mm][dd]HH][mm][yyyy]`. This will overwrite the date of your machine.

Depending on the installer you are using, the date above may not work. If this happens, just change the date again and try the "Install macOS" option in the recovery menu again.

If you successfully get to the installation location selection screen, make sure you have the newly formatted hard disk selected, not the USB.

Then just follow the installer instruction to finish your installation.

## Good luck and enjoy your new Mac!
