var bypassDomains = ['zhushou.huihui.cn', 'gnar.grammarly.com', 'stats.g.doubleclick.net', '101.96.10.44', 'api.mixpanel.com', 'qian.qq.com', 'short.weixin.qq.com', 'data.grammarly.com', 'qian-img.tenpay.com', 'r10---sn-ni57dn7s.gvt1.com', 'minorshort.weixin.qq.com', 'wx.qlogo.cn', 's.symcd.com', 'felog.grammarly.io', 'auth.grammarly.com', 'pingfore.qq.com', 'd3cv4a9a9wh0bt.cloudfront.net', 'finance.services.appex.bing.com', 'r8---sn-ni57rn7e.gvt1.com', 'ardownload.adobe.com'];
		function FindProxyForURL(url, host) {
			if (isPlainHostName(host) // including localhost
			|| shExpMatch(host, "*.local")) {
				return "DIRECT";
			}
			// only checks plain IP addresses to avoid leaking domain name
			if (/^[0-9.]+$/.test(host)) {
				if (isInNet(host, "10.0.0.0", "255.0.0.0") ||
				isInNet(host, "172.16.0.0",  "255.240.0.0") ||
				isInNet(host, "192.168.0.0",  "255.255.0.0") ||
				isInNet(host, "127.0.0.0", "255.255.255.0")) {
					return "DIRECT";
				}
			}
			// Lantern desktop version proxies only http(s) and ws(s)
			if (url.substring(0, 4) != 'http' && (url.substring(0, 2) != 'ws')) {
				return "DIRECT";
			}
			for (var d in bypassDomains) {
				if (host == bypassDomains[d]) {
					return "DIRECT";
				}
			}
			return "PROXY 127.0.0.1:8787; DIRECT";
		}