---
layout: post
title: 'VMwareでゲストOSとクリップボードの共有'
date: 2010-10-3
wordpress_id: 1466
permalink: /blog/share-clipboard-in-guest-os-with-vmware
comments: true
categories: ["Linux", "VMware"]
---
VMware Player/ WorkstationでゲストOS(ここではCentOS)をインストールした後、ホストOSとクリップボードを共有するためにはVMware Toolsをインストールする必要があります。

## インストール
VMware ToolsはゲストOS、つまり仮想マシン上のOSにインストールします。
VMware Player/Workstationのメニューから VM-> VMware Toolsのインストールを選択します。
出てくるダイアログに従ってファイルをダウンロード、解凍、インストールファイルの実行でやればいいです。インストールが成功すればクリップボードの共有は自動的に有効になるはずです。

## おまけに
VMware Toolsをインストールするときディスプレイの解像度を設定できます。インストール後も自由に変更できるようになります。
もう一つはVMwareのウィンドウから透明切り替えができるようになります。
