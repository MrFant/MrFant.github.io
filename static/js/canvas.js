! function() {
    function t(t) {
        return Math.log(t)
    }

    function n(t) {
        var n = 2 * Math.random() * Math.PI;
        return [Math.cos(n) * t, Math.sin(n) * t]
    }

    function e(t, n) {
        return Math.random() * (n - t) + t
    }

    function o() {
        for (var t = "0123456789ABCDEF", n = "#", e = 0; 6 > e; e++) n += t[Math.floor(16 * Math.random())];
        return n
    }

    function r() {
        w.clearRect(0, 0, d.width, d.height), E.forEach(function(t) {
            t.f = [0, 0]
        });
        for (var t = 0; t < E.length; t++)
            for (var n = t + 1; n < E.length; n++) {
                var e = a(t, n);
                if (e === t) {
                    i(n, t--), n > t && n--;
                    break
                }
                e === n && i(t, n--)
            }
        E.forEach(function(t) {
            c(t), l(t), h(t)
        }), f(r)
    }

    function i(n, e) {
        var o = E[n],
            r = E[e],
            i = o.m + r.m;
        o.v[0] = (o.v[0] * o.m + r.v[0] * r.m) / i, o.v[1] = (o.v[1] * o.m + r.v[1] * r.m) / i, o.m = i, o.r = t(i), E.splice(e, 1)
    }

    function l(t) {
        t.v[0] += t.f[0] / t.m, t.v[1] += t.f[1] / t.m
    }

    function a(t, n) {
        var e = E[t],
            o = E[n],
            r = o.l[0] - e.l[0],
            i = o.l[1] - e.l[1],
            l = r * r,
            a = i * i,
            c = Math.max(l + a, .01),
            h = Math.sqrt(c);
        if (5 > h) return e.m > o.m ? n : t;
        var u = m * e.m * o.m / c,
            f = Math.sign(r) * Math.sqrt(u * l / c),
            v = Math.sign(i) * Math.sqrt(u * a / c);
        return e.f[0] += f, e.f[1] += v, o.f[0] -= f, o.f[1] -= v, -1
    }

    function c(t) {
        w.beginPath(), w.arc(t.l[0], t.l[1], t.r, 0, 2 * Math.PI, !1), w.closePath(), w.fillStyle = t.color, w.fill()
    }

    function h(t) {
        var n = t.l[0] + t.v[0],
            e = t.l[1] + t.v[1];
        (n > d.width + 100 || -100 > n) && (t.v[0] = -t.v[0] * v), (e > d.height + 100 || -100 > e) && (t.v[1] = -t.v[1] * v), t.l[0] += t.v[0], t.l[1] += t.v[1]
    }

    function u() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(t) {
            window.setTimeout(t, 1e3 / 60)
        }
    }
    var f = u(),
        m = 1,
        v = .8,
        d = document.querySelector("canvas#universe"),
        s = document.querySelector(".jumbotron");
    s.style.background = "none", d.width = s.clientWidth, d.height = s.clientHeight;
    var w = d.getContext("2d"),
        g = {
            m: 1e5,
            r: t(1e5),
            color: "white",
            l: [e(35, d.width - 35), e(35, d.height - 35)],
            v: [e(-.1, .1), e(-.1, .1)]
        },
        M = {
            m: 100,
            r: t(100),
            color: "#ec232f",
            l: [g.l[0], g.l[1] - 25],
            v: [-6, 0]
        },
        q = {
            m: 1e3,
            r: t(1e3),
            color: "#32ee22",
            l: [g.l[0], g.l[1] + 120],
            v: [3.9, 0]
        },
        E = [g, M, q];
    r(), s.addEventListener("click", function(r) {
        var i = document.scrollingElement || document.documentElement,
            l = r.clientY + i.scrollTop - s.offsetTop,
            a = Math.pow(10, e(2, 6)),
            c = t(a),
            h = 10 / Math.log(a);
        E.push({
            m: a,
            r: c,
            color: o(),
            l: [r.clientX, l],
            v: n(h)
        })
    }), window.addEventListener("resize", function() {
        d.width = s.clientWidth, d.height = s.clientHeight
    })
}();