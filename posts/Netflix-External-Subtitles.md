---
title: "Netflix External Subtitles"
date: "2021-02-22"
---

# Netflix External Subtitles

Sometime Netflix doesn't offer the subtitles language you want, but it does provide a way for you to upload your own subtitles (using the hotkey **Ctrl + Option + Shift + T**).

However, there is a catch, Netflix only supports `.dfxp` subtitle files, which is uncommon.

If you need to convert your existing `.srt` , `.ass` subtitles to `.dfxp` , you can use online converters like [https://gotranscript.com/subtitle-converter](https://gotranscript.com/subtitle-converter). 

`.srt` files are better because they don't have special tags around text after conversion to `.dfxp`

Some useful commands:

- File encoding conversion (GB2312 to UTF8):

```bash
perl -MEncode -pi -e '$_=encode_utf8(decode(gb2312=>$_))' *.srt
```

- Re-sync subtitles (delay in seconds):

```bash
ffmpeg -itsoffset -0.8 -i filename.srt -c copy  filename-synced.srt
```

- Batch re-sync:

```bash
for f in *.srt; do ffmpeg -itsoffset -0.8 -i "$f" -c copy "$f-synced".srt;done
```

Chinese subtitles resource:
[http://zimuku.la](http://zimuku.la/)

[https://subhd.tv](https://subhd.tv/)
