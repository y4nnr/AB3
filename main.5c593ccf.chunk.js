(this["webpackJsonpaws-bookstore-demo-app"] = this["webpackJsonpaws-bookstore-demo-app"] || []).push([
    [0], {
        100: function(e, t, a) {
            e.exports = a.p + "static/media/hero-cookbooks.f06e69a7.png"
        },
        157: function(e, t, a) {},
        169: function(e, t, a) {
            e.exports = a.p + "static/media/supportedCards.0f89c06e.png"
        },
        175: function(e, t, a) {
            e.exports = a.p + "static/media/pastOrders.9fa03bfe.png"
        },
        176: function(e, t, a) {
            e.exports = a.p + "static/media/screenshot.e45e4325.pnga"
        },
        177: function(e, t, a) {
            e.exports = a.p + "static/media/yourpastorders.76f37cd9.png"
        },
        178: function(e, t, a) {
            e.exports = a.p + "static/media/hero-main.1c7e5e03.png"
        },
        179: function(e, t, a) {
            e.exports = a.p + "static/media/burgers.161c4a44.png"
        },
        180: function(e, t, a) {
            e.exports = a.p + "static/media/italian.92245953.png"
        },
        181: function(e, t, a) {
            e.exports = a.p + "static/media/noodles.86634adf.png"
        },
        182: function(e, t, a) {
            e.exports = a.p + "static/media/pancakes.22f42738.png"
        },
        183: function(e, t, a) {
            e.exports = a.p + "static/media/pineapple.203d8247.png"
        },
        184: function(e, t, a) {
            e.exports = a.p + "static/media/umami.c6f148dc.png"
        },
        185: function(e, t) {
            e.exports = ""
        },
        186: function(e, t, a) {
            e.exports = a.p + ""
        },
        187: function(e, t, a) {
            e.exports = a.p + ""
        },
        188: function(e, t) {
            e.exports = ""
        },
        189: function(e, t) {
            e.exports = ""
        },
        190: function(e, t, a) {
            e.exports = a.p + ""
        },
        191: function(e, t) {
            e.exports = ""
        },
        193: function(e, t, a) {
            e.exports = a.p + "static/media/hero-database.57fafec1.png"
        },
        194: function(e, t, a) {
            e.exports = a.p + "static/media/hero-cars.67a25963.png"
        },
        195: function(e, t, a) {
            e.exports = a.p + "static/media/hero-fairytales.ec14c774.png"
        },
        196: function(e, t, a) {
            e.exports = a.p + "static/media/hero-home.837f6ae9.png"
        },
        197: function(e, t, a) {
            e.exports = a.p + "static/media/hero-science.b62da370.png"
        },
        198: function(e, t, a) {
            e.exports = a.p + "static/media/hero-woodwork.3df92e23.png"
        },
        203: function(e, t, a) {
            e.exports = a(666)
        },
        208: function(e, t, a) {},
        46: function(e, t, a) {
            e.exports = a.p + "static/media/bestSellers.f95a983a.png"
        },
        52: function(e, t, a) {},
        607: function(e, t, a) {},
        608: function(e, t, a) {},
        609: function(e, t, a) {},
        610: function(e, t, a) {},
        641: function(e, t, a) {},
        642: function(e, t, a) {},
        643: function(e, t, a) {},
        646: function(e, t, a) {},
        647: function(e, t, a) {},
        648: function(e, t, a) {},
        65: function(e, t, a) {},
        66: function(e, t, a) {},
        666: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(0),
                s = a.n(n),
                r = a(54),
                o = a.n(r),
                c = a(143),
                i = (a(208), a(6)),
                l = a.n(i),
                m = a(12),
                d = a(8),
                u = a(24),
                p = a(55),
                h = a(160),
                g = a(672),
                E = a(676),
                A = a(675),
                v = (a(607), a(161)),
                w = a(70);
            const b = {
                books: "Books",
                clothes: "Clothes",
                computers: "Computers",
                cards: "Gift Cards",
                home: "Home Improvement",
                phones: "Phones",
                tv: "TV"
            };
            a(608);
            class C extends s.a.Component {
                render() {
                    return s.a.createElement("ul", {
                        className: "nav nav-pills justify-content-center nav-cat"
                    }, Object.values(b).map(e => s.a.createElement("li", {
                        role: "presentation",
                        key: e
                    }, s.a.createElement("a", {
                        className: "category-link",
                        href: "/category/".concat(e)
                    }, e))))
                }
            }
            a(609);
            var k = a(167);
            class M extends s.a.Component {
                constructor(e) {
                    super(e), this.handleChange = e => {
                        const t = e.currentTarget;
                        this.setState({
                            value: t.value
                        })
                    }, this.onSearch = () => {
                        this.setState({
                            redirect: "/search/".concat(this.state.value)
                        })
                    }, this.state = {
                        redirect: void 0,
                        value: ""
                    }
                }
                render() {
                    return s.a.createElement("form", {
                        className: "searchform mainsearch"
                    }, s.a.createElement("div", {
                        className: "row"
                    }, s.a.createElement("div", {
                        className: "col-md-8 search-padding"
                    }, s.a.createElement("div", {
                        className: "input-group"
                    }, s.a.createElement("div", {
                        className: "input-group-addon addon-black no-radius"
                    }, "Search"), s.a.createElement("input", {
                        type: "text",
                        className: "form-control no-radius",
                        id: "txtSearch",
                        value: this.state.value,
                        onChange: this.handleChange
                    }), s.a.createElement("div", {
                        className: "input-group-btn"
                    }, s.a.createElement("button", {
                        className: "btn btn-orange no-radius",
                        onClick: this.onSearch
                    }, s.a.createElement("span", {
                        className: "glyphicon glyphicon-search"
                    })), this.state.redirect && s.a.createElement(k.a, {
                        to: this.state.redirect
                    })))), s.a.createElement("div", {
                        className: "col-md-4 title-padding"
                    }, s.a.createElement("h3", {
                        className: "no-margin white"
                    }, "", s.a.createElement("span", {
                        className: "orange"
                    }, ""), ""))))
                }
            }
            var I = a(103),
                f = a(669),
                D = a(670),
                N = a(671),
                y = a(677),
                L = (a(610), a(169)),
                x = a.n(L);
            class j extends s.a.Component {
                constructor(e) {
                    super(e), this.getOrderTotal = () => this.state.orders.reduce((e, t) => e + t.price * t.quantity, 0).toFixed(2), this.handleChange = e => {
                        const t = e.target;
                        this.setState(Object(I.a)(Object(I.a)({}, this.state), {}, {
                            [t.name]: t.value
                        }))
                    }, this.onCheckout = () => {
                        const e = this.state.orders;
                        d.a.post("orders", "/orders", {
                            body: {
                                books: e
                            }
                        }).then(() => this.setState({
                            toConfirm: !0
                        }))
                    }, this.state = {
                        card: "1010101010101010",
                        expDate: void 0,
                        ccv: "123",
                        isLoading: !0,
                        toCart: !1,
                        orders: [],
                        toConfirm: !1
                    }
                }
                componentDidMount() {
                    var e = this;
                    return Object(m.a)(l.a.mark((function t() {
                        var a;
                        return l.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0, t.next = 3, e.listOrdersInCart();
                                case 3:
                                    a = t.sent, e.setState({
                                        orders: a
                                    }), t.next = 10;
                                    break;
                                case 7:
                                    t.prev = 7, t.t0 = t.catch(0), alert(t.t0);
                                case 10:
                                    e.setState({
                                        isLoading: !1
                                    });
                                case 11:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [0, 7]
                        ])
                    })))()
                }
                listOrdersInCart() {
                    return d.a.get("cart", "/cart", null)
                }
                getCardNumberValidationState() {
                    const e = this.state.card.length;
                    return e >= 15 && e <= 19 ? "success" : 0 !== e && (e < 15 || e > 19) ? "error" : null
                }
                render() {
                    return this.state.toConfirm ? s.a.createElement(k.a, {
                        to: "/checkout-confirm"
                    }) : this.state.isLoading ? null : s.a.createElement("div", {
                        className: "well-bs col-md-12 full-page no-padding-top"
                    }, s.a.createElement("div", {
                        className: "white-box no-margin-top"
                    }, s.a.createElement("div", {
                        className: "checkout "
                    }, s.a.createElement("img", {
                        src: x.a,
                        alt: "Supported cards"
                    }), s.a.createElement(f.a, null, s.a.createElement(D.a, {
                        controlId: "card",
                        validationState: this.getCardNumberValidationState()
                    }, s.a.createElement(N.a, null, "Card number"), s.a.createElement(y.a, {
                        name: "card",
                        type: "text",
                        value: this.state.card,
                        onChange: this.handleChange
                    }), s.a.createElement(y.a.Feedback, null)), s.a.createElement("div", {
                        className: "form-row"
                    }, s.a.createElement(D.a, {
                        controlId: "expDate"
                    }, s.a.createElement(N.a, null, "Expiration date"), s.a.createElement(y.a, {
                        name: "expDate",
                        type: "date",
                        value: this.state.expDate,
                        onChange: this.handleChange
                    }), s.a.createElement(y.a.Feedback, null)), s.a.createElement(D.a, {
                        className: "ccv",
                        controlId: "ccv"
                    }, s.a.createElement(N.a, null, "CCV"), s.a.createElement(y.a, {
                        name: "ccv",
                        type: "text",
                        value: this.state.ccv,
                        onChange: this.handleChange
                    }), s.a.createElement(y.a.Feedback, null)))))), s.a.createElement("div", {
                        className: "pull-right"
                    }, s.a.createElement("button", {
                        className: "btn btn-black",
                        type: "button",
                        onClick: this.onCheckout
                    }, "Pay ($".concat(this.getOrderTotal(), ")"))))
                }
            }
            class S extends n.Component {
                render() {
                    return s.a.createElement("div", null, s.a.createElement(M, null), s.a.createElement(C, null), s.a.createElement("div", {
                        className: "well-bs"
                    }, s.a.createElement("div", {
                        className: "white-box no-margin-top no-margin-bottom"
                    }, s.a.createElement("h3", null, "Checkout"))), s.a.createElement(j, null))
                }
            }
            var O = a(46),
                Q = a.n(O),
                z = a(175),
                W = a.n(z);
            a(641);
            class B extends n.Component {
                constructor(e) {
                    super(e), this.onViewReceipt = () => {
                        this.setState({
                            toPastOrders: !0
                        })
                    }, this.state = {
                        toPastOrders: !1
                    }
                }
                render() {
                    return this.state.toPastOrders ? s.a.createElement(k.a, {
                        to: "/past"
                    }) : s.a.createElement("div", null, s.a.createElement(M, null), s.a.createElement(C, null), s.a.createElement("div", {
                        className: "well-bs"
                    }, s.a.createElement("div", {
                        className: "white-box no-margin-top no-margin-bottom"
                    }, s.a.createElement("h3", null, "Purchase confirmed"))), s.a.createElement("div", {
                        className: "well-bs full-page no-padding-bottom no-padding-top"
                    }, s.a.createElement("div", {
                        className: "white-box padding-50 no-margin-top col-md-12 no-margin-bottom"
                    }, s.a.createElement("h4", {
                        className: "text-center"
                    }, "Your purchase is complete!"), s.a.createElement("button", {
                        className: "btn btn-black btn-black-center",
                        type: "button",
                        onClick: this.onViewReceipt
                    }, "View Receipt")),))
                }
            }
            var T = a(176),
                Y = a.n(T),
                V = a(177),
                P = a.n(V),
                H = a(77),
                G = a.n(H),
                J = a(178),
                X = a.n(J);
            a(65);
            class U extends s.a.Component {
                render() {
                    return s.a.createElement("img", {
                        src: X.a,
                        className: "img-fluid full-width",
                        alt: "The more you read the more you know"
                    })
                }
            }
            a(52);
            var K = a(179),
                F = a.n(K),
                q = a(180),
                Z = a.n(q),
                R = a(181),
                _ = a.n(R),
                $ = a(182),
                ee = a.n($),
                te = a(183),
                ae = a.n(te),
                ne = a(184),
                se = a.n(ne);
            const re = [F.a, Z.a, _.a, ee.a, ae.a, se.a];
            class oe extends s.a.Component {
                render() {
                    return null
                }
            }
            var ce = a(174);
            a(642);
            class ie extends s.a.Component {
                render() {
                    return s.a.createElement("span", null, s.a.createElement(ce.a, {
                        glyph: this.props.stars >= 1 ? "star" : "star-empty1"
                    }), s.a.createElement(ce.a, {
                        glyph: this.props.stars >= 2 ? "star" : "star-empty2"
                    }), s.a.createElement(ce.a, {
                        glyph: this.props.stars >= 3 ? "star" : "star-empty3"
                    }), s.a.createElement(ce.a, {
                        glyph: this.props.stars >= 4 ? "star" : "star-empty4"
                    }), s.a.createElement(ce.a, {
                        glyph: this.props.stars >= 5 ? "star" : "star-empty5"
                    }))
                }
            }
            var le = ie;
            class me extends s.a.Component {
                constructor(e) {
                    var t;
                    super(e), t = this, this.onAddToCart = Object(m.a)(l.a.mark((function e() {
                        var a;
                        return l.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t.setState({
                                        loading: !0
                                    }), e.next = 3, d.a.get("cart", "/cart/".concat(t.props.bookId), null);
                                case 3:
                                    (a = e.sent) ? d.a.put("cart", "/cart", {
                                        body: {
                                            bookId: t.props.bookId,
                                            quantity: a.quantity + 1
                                        }
                                    }).then(() => t.setState({
                                        toCart: !0
                                    })): d.a.post("cart", "/cart", {
                                        body: {
                                            bookId: t.props.bookId,
                                            price: t.props.price,
                                            quantity: 1
                                        }
                                    }).then(() => t.setState({
                                        toCart: !0
                                    }));
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))), this.getVariant = () => this.props.variant && "center" === this.props.variant ? "btn btn-black btn-black-center" : "btn btn-black pull-right", this.state = {
                        loading: !1,
                        toCart: !1
                    }
                }
                render() {
                    return this.state.toCart ? s.a.createElement(k.a, {
                        to: "/cart"
                    }) : s.a.createElement("button", {
                        className: this.getVariant(),
                        disabled: this.state.loading,
                        type: "button",
                        onClick: this.onAddToCart
                    }, this.state.loading && s.a.createElement(ce.a, {
                        glyph: "refresh",
                        className: "spinning"
                    }), "buyAgain" === this.props.variant ? "Buy again" : "Add to cart")
                }
            }
            var de = me;
            class ue extends s.a.Component {
                render() {
                    if (this.props.book) return s.a.createElement("div", {
                        className: "col-sm-3 col-md-3"
                    }, s.a.createElement("div", {
                        className: "thumbnail no-border"
                    }, s.a.createElement("p", {
                        className: "rating-container2"
                    }, s.a.createElement(le, {
                        stars: this.props.book.rating1
                    }), s.a.createElement("span", {
                        className: "pull-right"
                    }, "$".concat(this.props.book.price))), s.a.createElement("img", {
                        src: this.props.book.cover,
                        alt: "".concat(this.props.book.name, " cover")
                    }), s.a.createElement("div", {
                        className: "caption"
                    }, s.a.createElement("h4", {
                        className: "text-center"
                    }, this.props.book.name), s.a.createElement(de, {
                        bookId: this.props.book.id,
                        price: this.props.book.price,
                        variant: "center"
                    }))))
                }
            }
            var pe = ue;
            class he extends s.a.Component {
                constructor(e) {
                    super(e), this.state = {
                        isLoading: !0,
                        books: []
                    }
                }
                componentDidMount() {
                    var e = this;
                    return Object(m.a)(l.a.mark((function t() {
                        var a;
                        return l.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0, t.next = 3, e.listBooks();
                                case 3:
                                    a = t.sent, e.setState({
                                        books: a
                                    }), t.next = 10;
                                    break;
                                case 7:
                                    t.prev = 7, t.t0 = t.catch(0), alert(t.t0);
                                case 10:
                                    e.setState({
                                        isLoading: !1
                                    });
                                case 11:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [0, 7]
                        ])
                    })))()
                }
                listBooks() {
                    return d.a.get("books", "/books?category=Cookbooks", null)
                }
                render() {
                    return null
                }
            }
            a(66);
            var ge = a(185),
                Ee = a.n(ge),
                Ae = a(186),
                ve = a.n(Ae),
                we = a(187),
                be = a.n(we),
                Ce = a(188),
                ke = a.n(Ce),
                Me = a(189),
                Ie = a.n(Me),
                fe = a(190),
                De = a.n(fe),
                Ne = a(191),
                ye = a.n(Ne);
            const Le = [Ee.a, ve.a, be.a, ke.a, Ie.a, De.a, ye.a];
            class xe extends s.a.Component {
                render() {
                    const e = Le[Math.floor(Math.random() * Le.length)];
                    return s.a.createElement("img", {
                        className: "friend-thumb"
                    })
                }
            }
            class je extends s.a.Component {
                constructor(e) {
                    super(e), this.getFriends = () => d.a.get("recommendations", "/recommendations/".concat(this.props.bookId), null), this.state = {
                        friends: []
                    }
                }
                componentDidMount() {
                    var e = this;
                    return Object(m.a)(l.a.mark((function t() {
                        var a;
                        return l.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0, t.next = 3, e.getFriends();
                                case 3:
                                    a = t.sent, e.setState({
                                        friends: a
                                    }), t.next = 10;
                                    break;
                                case 7:
                                    t.prev = 7, t.t0 = t.catch(0), alert(t.t0);
                                case 10:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [0, 7]
                        ])
                    })))()
                }
                render() {
                    if (!(this.state.friends[0] && this.state.friends[0].friendsPurchased && this.state.friends[0].friendsPurchased.length > 0)) return s.a.createElement("div", {
                        className: "no-friends-padding"
                    });
                    const e = this.state.friends[0].friendsPurchased.length,
                        t = this.state.friends[0].friendsPurchased;
                    return s.a.createElement("div", null, s.a.createElement("div", null, ""), s.a.createElement("p", null, t.slice(0, 3).map(e => s.a.createElement(xe, {
                        key: e
                    })), e > 3 && s.a.createElement("span", {
                        className: "orange"
                    })))
                }
            }
            var Se = je;
            class Oe extends s.a.Component {
                constructor(e) {
                    super(e), this.state = {
                        book: void 0
                    }
                }
                componentDidMount() {
                    d.a.get("books", "/books/".concat(this.props.bookId), null).then(e => this.setState({
                        book: e
                    })).catch(e => alert(e))
                }
                render() {
                    return this.state.book ? s.a.createElement("div", {
                        className: "white-box"
                    }, s.a.createElement("div", {
                        className: "media"
                    }, s.a.createElement("div", {
                        className: "media-left media-middle no-padding"
                    }, s.a.createElement("img", {
                        className: "product-thumb border",
                        src: this.state.book.cover,
                        alt: "".concat(this.state.book.name, " cover")
                    })), s.a.createElement("div", {
                        className: "media-body product-padding padding-20"
                    }, s.a.createElement("h3", {
                        className: "media-heading"
                    }, this.state.book.name, s.a.createElement("small", {
                        className: "pull-right "
                    }, "$", this.state.book.price)), s.a.createElement("p", {
                        className: "no-margin"
                    }, s.a.createElement("small", null, this.state.book.category)), s.a.createElement(Se, {
                        bookId: this.props.bookId
                    }), s.a.createElement("div", null, "", s.a.createElement(de, {
                        bookId: this.state.book.id,
                        price: this.state.book.price
                    })), s.a.createElement(le, {
                        stars: this.state.book.rating3
                    })))) : null
                }
            }
            class Qe extends s.a.Component {
                constructor(e) {
                    super(e), this.state = {
                        isLoading: !0,
                        recommendations: []
                    }
                }
                componentDidMount() {
                    d.a.get("recommendations", "/recommendations", null).then(e => {
                        this.setState({
                            recommendations: e,
                            isLoading: !1
                        })
                    }).catch(e => alert(e))
                }
                render() {
                    return this.state.isLoading ? null : s.a.createElement("div", {
                        className: "well-bs no-padding-top col-md-12 no-border"
                    }, s.a.createElement("div", {
                        className: "container-category"
                    }, s.a.createElement("h3", null, "")), this.state.recommendations.slice(0, 5).map(e => s.a.createElement(Oe, {
                        bookId: e.bookId,
                        key: e.bookId
                    })))
                }
            }
            a(157);
            class ze extends n.Component {
                constructor(e) {
                    super(e), this.state = {
                        isLoading: !0
                    }
                }
                componentDidMount() {
                    var e = this;
                    return Object(m.a)(l.a.mark((function t() {
                        return l.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (e.props.isAuthenticated) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    e.setState({
                                        isLoading: !1
                                    });
                                case 3:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))()
                }
                renderLanding() {
                    return s.a.createElement("div", {
                        className: "lander"
                    }, s.a.createElement("h1", null, "Website built for AB3"), s.a.createElement("hr", null), s.a.createElement("p", null, ""), s.a.createElement("div", {
                        className: "button-container col-md-12"
                    }, s.a.createElement(u.LinkContainer, {
                        to: "/signup"
                    }, s.a.createElement("a", {
                        href: "/signup"
                    }, "Sign up to access OcTank Store"))), s.a.createElement("img", {
                        src: Y.a,
                        className: "img-fluid full-width",
                        alt: ""
                    }),)
                }
                renderHome() {
                    return s.a.createElement("div", {
                        className: "bookstore"
                    }, s.a.createElement(U, null), s.a.createElement(M, null), s.a.createElement(C, null), s.a.createElement(oe, null),)  
                }
                render() {
                    return s.a.createElement("div", {
                        className: "Home"
                    }, this.props.isAuthenticated ? this.renderHome() : this.renderLanding())
                }
            }
            var We = a(673);
            a(643);
            const Be = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            class Te extends s.a.Component {
                constructor(e) {
                    var t;
                    super(e), t = this, this.onEmailChange = e => {
                        const t = e.target;
                        this.setState({
                            email: t.value,
                            emailValid: Be.test(t.value.toLowerCase()) ? "success" : "error"
                        })
                    }, this.onPasswordChange = e => {
                        const t = e.target;
                        this.setState({
                            password: t.value,
                            passwordValid: t.value.length < 8 ? "error" : "success"
                        })
                    }, this.onLogin = function() {
                        var e = Object(m.a)(l.a.mark((function e(a) {
                            return l.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return a.preventDefault(), t.setState({
                                            loading: !0
                                        }), e.prev = 2, e.next = 5, d.b.signIn(t.state.email, t.state.password);
                                    case 5:
                                        t.props.userHasAuthenticated(!0), t.setState({
                                            redirect: !0
                                        }), e.next = 13;
                                        break;
                                    case 9:
                                        e.prev = 9, e.t0 = e.catch(2), alert(e.t0.message), t.setState({
                                            loading: !1
                                        });
                                    case 13:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [2, 9]
                            ])
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(), this.state = {
                        loading: !1,
                        redirect: !1,
                        email: "",
                        password: "",
                        emailValid: void 0,
                        passwordValid: void 0
                    }
                }
                render() {
                    return this.state.redirect ? s.a.createElement(k.a, {
                        to: "/"
                    }) : s.a.createElement("div", {
                        className: "Login"
                    }, s.a.createElement("form", {
                        onSubmit: this.onLogin
                    }, s.a.createElement(D.a, {
                        controlId: "email",
                        validationState: this.state.emailValid
                    }, s.a.createElement(N.a, null, "Email"), s.a.createElement(y.a, {
                        name: "email",
                        type: "email",
                        bsSize: "large",
                        value: this.state.email,
                        onChange: this.onEmailChange
                    }), s.a.createElement(y.a.Feedback, null)), s.a.createElement(D.a, {
                        controlId: "password",
                        validationState: this.state.passwordValid
                    }, s.a.createElement(N.a, null, "Password"), s.a.createElement(y.a, {
                        name: "password",
                        type: "password",
                        bsSize: "large",
                        value: this.state.password,
                        onChange: this.onPasswordChange
                    }), s.a.createElement(y.a.Feedback, null)), s.a.createElement(We.a, {
                        block: !0,
                        bsSize: "large",
                        type: "submit",
                        disabled: "success" !== this.state.passwordValid || "success" !== this.state.emailValid
                    }, this.state.loading && s.a.createElement(ce.a, {
                        glyph: "refresh",
                        className: "spinning"
                    }), "Log in")))
                }
            }
            a(646);
            var Ye = () => s.a.createElement("div", {
                    className: "not-found"
                }, s.a.createElement("h3", null, "Sorry, page not found!")),
                Ve = a(674);
            a(647);
            const Pe = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            class He extends s.a.Component {
                constructor(e) {
                    var t;
                    super(e), t = this, this.onEmailChange = e => {
                        const t = e.target;
                        this.setState({
                            email: t.value,
                            emailValid: Pe.test(t.value.toLowerCase()) ? "success" : "error"
                        })
                    }, this.onPasswordChange = e => {
                        const t = e.target;
                        this.setState({
                            password: t.value,
                            passwordValid: t.value.length < 8 ? "error" : "success"
                        })
                    }, this.onConfirmPasswordChange = e => {
                        const t = e.target;
                        this.setState({
                            confirmPassword: t.value,
                            confirmPasswordValid: t.value !== this.state.password ? "error" : "success"
                        })
                    }, this.onConfirmationCodeChange = e => {
                        const t = e.target;
                        this.setState({
                            confirmationCode: t.value,
                            confirmationCodeValid: t.value.length > 0 ? "error" : "success"
                        })
                    }, this.onSignup = function() {
                        var e = Object(m.a)(l.a.mark((function e(a) {
                            var n;
                            return l.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return a.preventDefault(), t.setState({
                                            loading: !0
                                        }), e.prev = 2, e.next = 5, d.b.signUp({
                                            username: t.state.email,
                                            password: t.state.password
                                        });
                                    case 5:
                                        n = e.sent, t.setState({
                                            user: n,
                                            loading: !1
                                        }), e.next = 13;
                                        break;
                                    case 9:
                                        e.prev = 9, e.t0 = e.catch(2), alert(e.t0.message), t.setState({
                                            loading: !1
                                        });
                                    case 13:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [2, 9]
                            ])
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(), this.onConfirm = function() {
                        var e = Object(m.a)(l.a.mark((function e(a) {
                            return l.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return a.preventDefault(), t.setState({
                                            loading: !0
                                        }), e.prev = 2, e.next = 5, d.b.confirmSignUp(t.state.email, t.state.confirmationCode);
                                    case 5:
                                        return e.next = 7, d.b.signIn(t.state.email, t.state.password);
                                    case 7:
                                        t.props.userHasAuthenticated(!0), t.setState({
                                            redirect: !0
                                        }), e.next = 15;
                                        break;
                                    case 11:
                                        e.prev = 11, e.t0 = e.catch(2), alert(e.t0.message), t.setState({
                                            loading: !1
                                        });
                                    case 15:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [2, 11]
                            ])
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(), this.showConfirmationForm = () => this.state.redirect ? s.a.createElement(k.a, {
                        to: "/"
                    }) : s.a.createElement("form", {
                        onSubmit: this.onConfirm
                    }, s.a.createElement(D.a, {
                        controlId: "confirmationCode"
                    }, s.a.createElement(N.a, null, "Confirmation code"), s.a.createElement(y.a, {
                        name: "code",
                        type: "tel",
                        bsSize: "large",
                        value: this.state.confirmationCode,
                        onChange: this.onConfirmationCodeChange
                    }), s.a.createElement(y.a.Feedback, null), s.a.createElement(Ve.a, null, "A confirmation code will be sent to the email address provided")), s.a.createElement(We.a, {
                        block: !0,
                        bsSize: "large",
                        type: "submit",
                        disabled: "success" === this.state.confirmationCodeValid
                    }, this.state.loading && s.a.createElement(ce.a, {
                        glyph: "refresh",
                        className: "spinning"
                    }), "Confirm")), this.showSignupForm = () => s.a.createElement("form", {
                        onSubmit: this.onSignup
                    }, s.a.createElement(D.a, {
                        controlId: "email",
                        validationState: this.state.emailValid
                    }, s.a.createElement(N.a, null, "Email"), s.a.createElement(y.a, {
                        name: "email",
                        type: "email",
                        bsSize: "large",
                        value: this.state.email,
                        onChange: this.onEmailChange
                    }), s.a.createElement(y.a.Feedback, null)), s.a.createElement(D.a, {
                        controlId: "password",
                        validationState: this.state.passwordValid
                    }, s.a.createElement(N.a, null, "Password"), s.a.createElement(y.a, {
                        name: "password",
                        type: "password",
                        bsSize: "large",
                        value: this.state.password,
                        onChange: this.onPasswordChange
                    }), s.a.createElement(y.a.Feedback, null), s.a.createElement(Ve.a, null, "Must be at least 8 characters")), s.a.createElement(D.a, {
                        controlId: "confirmPassword",
                        validationState: this.state.confirmPasswordValid
                    }, s.a.createElement(N.a, null, "Confirm Password"), s.a.createElement(y.a, {
                        name: "confirmPassword",
                        type: "password",
                        bsSize: "large",
                        value: this.state.confirmPassword,
                        onChange: this.onConfirmPasswordChange
                    }), s.a.createElement(y.a.Feedback, null)), s.a.createElement(We.a, {
                        block: !0,
                        bsSize: "large",
                        type: "submit",
                        disabled: "success" !== this.state.passwordValid || "success" !== this.state.confirmPasswordValid || "success" !== this.state.emailValid
                    }, this.state.loading && s.a.createElement(ce.a, {
                        glyph: "refresh",
                        className: "spinning"
                    }), "Log in")), this.state = {
                        loading: !1,
                        email: "",
                        password: "",
                        confirmPassword: "",
                        confirmationCode: "",
                        emailValid: void 0,
                        passwordValid: void 0,
                        confirmPasswordValid: void 0,
                        confirmationCodeValid: void 0,
                        user: void 0,
                        redirect: !1
                    }
                }
                render() {
                    return s.a.createElement("div", {
                        className: "Signup"
                    }, void 0 === this.state.user ? this.showSignupForm() : this.showConfirmationForm())
                }
            }
            class Ge extends s.a.Component {
                constructor(e) {
                    super(e), this.state = {
                        isLoading: !0,
                        books: []
                    }
                }
                componentDidMount() {
                    var e = this;
                    return Object(m.a)(l.a.mark((function t() {
                        var a;
                        return l.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0, t.next = 3, e.listBooks();
                                case 3:
                                    a = t.sent, e.setState({
                                        books: a
                                    }), t.next = 10;
                                    break;
                                case 7:
                                    t.prev = 7, t.t0 = t.catch(0), alert(t.t0);
                                case 10:
                                    e.setState({
                                        isLoading: !1
                                    });
                                case 11:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [0, 7]
                        ])
                    })))()
                }
                listBooks() {
                    return d.a.get("books", "/books?category=".concat(this.props.match.params.id), null)
                }
                render() {
                    return this.state.isLoading ? s.a.createElement("div", {
                        className: "loader"
                    }) : s.a.createElement("div", null, s.a.createElement("div", {
                        className: "well-bs no-radius"
                    }, s.a.createElement("div", {
                        className: "container-category"
                    }, s.a.createElement("h3", null, this.props.match.params.id), s.a.createElement("div", {
                        className: "row"
                    }, this.state.books.map(e => s.a.createElement(pe, {
                        book: e,
                        key: e.id
                    }))))))
                }
            }
            var Je = a(193),
                Xe = a.n(Je),
                Ue = a(194),
                Ke = a.n(Ue),
                Fe = a(100),
                qe = a.n(Fe),
                Ze = a(195),
                Re = a.n(Ze),
                _e = a(196),
                $e = a.n(_e),
                et = a(197),
                tt = a.n(et),
                at = a(198),
                nt = a.n(at);
            class st extends n.Component {
                constructor(...e) {
                    super(...e), this.getImage = () => {
                        switch (this.props.match.params.id) {
                            case b.clothes:
                                return qe.a;
                            case b.computers:
                                return Xe.a;
                            case b.cards:
                                return Re.a;
                            case b.home:
                                return tt.a;
                            case b.phones:
                                return $e.a;
                            case b.tv:
                                return Ke.a;
                            case b.books:
                                return nt.a;
                            default:
                                return qe.a
                        }
                    }
                }
                render() {
                    return s.a.createElement("div", {
                        className: "Category"
                    }, s.a.createElement(M, null), s.a.createElement(C, null), s.a.createElement(oe, null), s.a.createElement("img", {
                        src: this.getImage(),
                        alt: "".concat(this.getImage(), " hero"),
                        className: "img-fluid full-width top-hero-padding"
                    }), s.a.createElement(Ge, {
                        match: this.props.match
                    }))
                }
            }
            class rt extends s.a.Component {
                constructor(e) {
                    var t;
                    super(e), t = this, this.onRemove = Object(m.a)(l.a.mark((function e() {
                        return l.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t.setState({
                                        removeLoading: !0
                                    }), e.next = 3, d.a.del("cart", "/cart", {
                                        body: {
                                            bookId: t.props.order.bookId
                                        }
                                    });
                                case 3:
                                    t.props.calculateTotal();
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))), this.onQuantityUpdated = function() {
                        var e = Object(m.a)(l.a.mark((function e(a) {
                            return l.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, d.a.put("cart", "/cart", {
                                            body: {
                                                bookId: t.props.order.bookId,
                                                quantity: parseInt(a.target.value, 10)
                                            }
                                        });
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(), this.state = {
                        book: void 0,
                        removeLoading: !1
                    }
                }
                componentDidMount() {
                    var e = this;
                    return Object(m.a)(l.a.mark((function t() {
                        var a;
                        return l.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0, t.next = 3, e.getBook(e.props.order);
                                case 3:
                                    a = t.sent, e.setState({
                                        book: a
                                    }), t.next = 10;
                                    break;
                                case 7:
                                    t.prev = 7, t.t0 = t.catch(0), alert(t.t0);
                                case 10:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [0, 7]
                        ])
                    })))()
                }
                getBook(e) {
                    return d.a.get("books", "/books/".concat(e.bookId), null)
                }
                render() {
                    return this.state.book ? s.a.createElement("div", {
                        className: "white-box"
                    }, s.a.createElement("div", {
                        className: "media"
                    }, s.a.createElement("div", {
                        className: "media-left media-middle"
                    }, s.a.createElement("img", {
                        className: "media-object product-thumb",
                        src: this.state.book.cover,
                        alt: "".concat(this.state.book.name, " cover")
                    })), s.a.createElement("div", {
                        className: "media-body"
                    }, s.a.createElement("h3", {
                        className: "media-heading"
                    }, this.state.book.name, s.a.createElement("div", {
                        className: "pull-right margin-1"
                    }, s.a.createElement("small", null, "$", this.state.book.price))), s.a.createElement("p", null, s.a.createElement("small", null, this.state.book.category)), s.a.createElement(Se, {
                        bookId: this.props.order.bookId
                    }), s.a.createElement("div", null, "", s.a.createElement("div", {
                        className: "pull-right"
                    }, s.a.createElement("div", {
                        className: "input-group"
                    }, s.a.createElement("input", {
                        type: "number",
                        className: "form-control",
                        placeholder: "Quantity",
                        defaultValue: this.props.order.quantity.toString(),
                        onChange: this.onQuantityUpdated,
                        min: 1
                    }), s.a.createElement("span", {
                        className: "input-group-btn"
                    }, s.a.createElement("button", {
                        className: "btn btn-black",
                        type: "button",
                        onClick: this.onRemove,
                        disabled: this.state.removeLoading
                    }, this.state.removeLoading && s.a.createElement(ce.a, {
                        glyph: "refresh",
                        className: "spinning"
                    }), "Remove"))))), s.a.createElement("p", null, s.a.createElement(le, {
                        stars: this.state.book.rating4
                    }))))) : null
                }
            }
            a(648);
            class ot extends n.Component {
                constructor(e) {
                    var t;
                    super(e), t = this, this.getOrderTotal = Object(m.a)(l.a.mark((function e() {
                        var a, n;
                        return l.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.listOrdersInCart();
                                case 2:
                                    a = e.sent, t.setState({
                                        orders: a
                                    }), n = a.reduce((e, t) => e + t.price * t.quantity, 0).toFixed(2), t.setState({
                                        orderTotal: n
                                    });
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))), this.onCheckout = () => {
                        this.setState({
                            toCheckout: !0
                        })
                    }, this.state = {
                        isLoading: !0,
                        orders: [],
                        orderTotal: void 0,
                        toCheckout: !1
                    }
                }
                componentDidMount() {
                    var e = this;
                    return Object(m.a)(l.a.mark((function t() {
                        var a;
                        return l.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0, t.next = 3, e.listOrdersInCart();
                                case 3:
                                    a = t.sent, e.setState({
                                        orders: a
                                    }), t.next = 10;
                                    break;
                                case 7:
                                    t.prev = 7, t.t0 = t.catch(0), alert(t.t0);
                                case 10:
                                    e.getOrderTotal(), e.setState({
                                        isLoading: !1
                                    });
                                case 12:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [0, 7]
                        ])
                    })))()
                }
                listOrdersInCart() {
                    return d.a.get("cart", "/cart", null)
                }
                render() {
                    return this.state.toCheckout ? s.a.createElement(k.a, {
                        to: "/checkout"
                    }) : this.state.isLoading ? s.a.createElement("div", {
                        className: "loader"
                    }) : s.a.createElement("div", {
                        className: "Category"
                    }, s.a.createElement(M, null), s.a.createElement(C, null), s.a.createElement("div", {
                        className: "well-bs padding-bottom-120"
                    }, s.a.createElement("div", {
                        className: "white-box no-margin-top"
                    }, s.a.createElement("h3", null, "Shopping cart")), this.state.orders.map(e => s.a.createElement(rt, {
                        order: e,
                        key: e.bookId,
                        calculateTotal: () => this.getOrderTotal()
                    })), s.a.createElement("div", {
                        className: "pull-right checkout-padding"
                    }, s.a.createElement("button", {
                        className: "btn btn-black",
                        type: "button",
                        disabled: this.state.orders.length < 1,
                        onClick: this.onCheckout
                    }, "Checkout"))), s.a.createElement("div", {
                        className: "well-bs col-md-12 full-page"
                    }))
                }
            }
            class ct extends s.a.Component {
                constructor(e) {
                    super(e), this.state = {
                        book: void 0
                    }
                }
                componentDidMount() {
                    var e = this;
                    return Object(m.a)(l.a.mark((function t() {
                        var a;
                        return l.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0, t.next = 3, e.getBook(e.props.order);
                                case 3:
                                    a = t.sent, e.setState({
                                        book: a
                                    }), t.next = 10;
                                    break;
                                case 7:
                                    t.prev = 7, t.t0 = t.catch(0), alert(t.t0);
                                case 10:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [0, 7]
                        ])
                    })))()
                }
                getBook(e) {
                    return d.a.get("books", "/books/".concat(e.bookId), null)
                }
                render() {
                    return this.state.book ? s.a.createElement("div", {
                        className: "white-box"
                    }, s.a.createElement("div", {
                        className: "media"
                    }, s.a.createElement("div", {
                        className: "media-left media-middle"
                    }, s.a.createElement("img", {
                        className: "media-object product-thumb",
                        src: this.state.book.cover,
                        alt: "".concat(this.state.book.name, " covers")
                    })), s.a.createElement("div", {
                        className: "media-body"
                    }, s.a.createElement("h3", {
                        className: "media-heading"
                    }, this.state.book.name, s.a.createElement("div", {
                        className: "pull-right margin-1"
                    }, s.a.createElement("small", null, "".concat(this.props.order.quantity, " @ ").concat(this.state.book.price)))), s.a.createElement("small", null, this.state.book.category), s.a.createElement(Se, {
                        bookId: this.props.order.bookId
                    }), s.a.createElement("div", null, "", s.a.createElement(de, {
                        bookId: this.state.book.id,
                        price: this.state.book.price,
                        variant: "buyAgain"
                    })), s.a.createElement(le, {
                        stars: this.state.book.rating5
                    })))) : s.a.createElement("div", {
                        className: "white-box"
                    }, s.a.createElement("div", {
                        className: "media"
                    }, s.a.createElement("div", {
                        className: "media-left media-middle"
                    }, s.a.createElement("div", {
                        className: "loader-no-margin"
                    }))))
                }
            }
            class it extends n.Component {
                constructor(e) {
                    super(e), this.getPrettyDate = e => {
                        const t = new Date(e);
                        return "".concat(t.getMonth(), "/").concat(t.getDate(), "/").concat(t.getFullYear(), " ").concat(t.getHours(), ":").concat(t.getMinutes() < 10 ? "0" : "").concat(t.getMinutes())
                    }, this.state = {
                        userInfo: null,
                        isLoading: !0,
                        orders: []
                    }
                }
                componentDidMount() {
                    var e = this;
                    return Object(m.a)(l.a.mark((function t() {
                        var a, n;
                        return l.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, d.b.currentUserInfo();
                                case 2:
                                    return a = t.sent, e.setState({
                                        userInfo: a
                                    }), t.prev = 4, t.next = 7, e.listOrders();
                                case 7:
                                    n = t.sent, e.setState({
                                        orders: n,
                                        isLoading: !1
                                    }), t.next = 14;
                                    break;
                                case 11:
                                    t.prev = 11, t.t0 = t.catch(4), alert(t.t0);
                                case 14:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [4, 11]
                        ])
                    })))()
                }
                listOrders() {
                    return d.a.get("orders", "/orders", null)
                }
                render() {
                    return s.a.createElement("div", {
                        className: "Category"
                    }, s.a.createElement(M, null), s.a.createElement(C, null), s.a.createElement("div", {
                        className: "well-bs col-md-12"
                    }, this.state.userInfo && s.a.createElement("div", {
                        className: "white-box no-margin-top"
                    }, s.a.createElement("h3", null, "Hello ".concat(this.state.userInfo.attributes.email, "!"))), s.a.createElement("div", {
                        className: "white-box"
                    }, s.a.createElement("h3", null, "Past purchases")), !this.state.isLoading && this.state.orders && this.state.orders.sort((e, t) => t.orderDate - e.orderDate).map(e => s.a.createElement("div", {
                        className: "order-date",
                        key: e.orderId
                    }, s.a.createElement("h4", null, "Order date: ".concat(this.getPrettyDate(e.orderDate))), e.books.map(e => s.a.createElement(ct, {
                        order: e,
                        key: e.bookId
                    })))),))
                }
            }
            class lt extends s.a.Component {
                constructor(e) {
                    super(e), this.state = {
                        book: void 0
                    }
                }
                componentDidMount() {
                    var e = this;
                    return Object(m.a)(l.a.mark((function t() {
                        var a;
                        return l.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0, t.next = 3, e.getBook();
                                case 3:
                                    a = t.sent, e.setState({
                                        book: a
                                    }), t.next = 10;
                                    break;
                                case 7:
                                    t.prev = 7, t.t0 = t.catch(0), alert(t.t0);
                                case 10:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [0, 7]
                        ])
                    })))()
                }
                getBook() {
                    return d.a.get("books", "/books/".concat(this.props.bookId), null)
                }
                render() {
                    return this.state.book ? s.a.createElement("div", {
                        className: "white-box"
                    }, s.a.createElement("div", {
                        className: "media"
                    }, s.a.createElement("div", {
                        className: "media-left media-middle no-padding"
                    }, s.a.createElement("img", {
                        className: "media-object product-thumb",
                        src: this.state.book.cover,
                        alt: "".concat(this.state.book.name, " cover")
                    })), s.a.createElement("div", {
                        className: "media-body product-padding padding-20"
                    }, s.a.createElement("h3", {
                        className: "media-heading"
                    }, this.state.book.name, s.a.createElement("small", {
                        className: "pull-right margin-1"
                    }, s.a.createElement("h4", null, "$", this.state.book.price))), s.a.createElement("p", null, s.a.createElement("small", null, this.state.book.category)), s.a.createElement(Se, {
                        bookId: this.props.bookId
                    }), s.a.createElement("div", null, "", s.a.createElement(de, {
                        bookId: this.props.bookId,
                        price: this.state.book.price
                    })), ))) : null
                }
            }
            var mt = lt;
            class dt extends s.a.Component {
                constructor(e) {
                    super(e), this.state = {
                        isLoading: !0,
                        books: []
                    }
                }
                componentDidMount() {
                    var e = this;
                    return Object(m.a)(l.a.mark((function t() {
                        var a, n, s, r;
                        return l.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0, a = [], t.next = 4, d.a.get("bestsellers", "/bestsellers", null);
                                case 4:
                                    for (n = t.sent, s = 0; s < n.length; s++) r = JSON.parse(n[s]), a.push({
                                        bookId: r
                                    });
                                    e.setState({
                                        books: a,
                                        isLoading: !1
                                    }), t.next = 12;
                                    break;
                                case 9:
                                    t.prev = 9, t.t0 = t.catch(0), alert(t.t0);
                                case 12:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [0, 9]
                        ])
                    })))()
                }
                render() {
                    return s.a.createElement("div", {
                        className: "Category"
                    }, s.a.createElement(M, null), s.a.createElement(C, null), s.a.createElement("div", null, s.a.createElement("div", {
                        className: "well-bs no-radius"
                    }, s.a.createElement("div", {
                        className: "container-category"
                    }, s.a.createElement("h3", null, "Top 10 best sellers")), this.state.isLoading ? s.a.createElement("div", {
                        className: "loader"
                    }) : this.state.books.slice(0, 20).map(e => s.a.createElement(mt, {
                        bookId: e.bookId,
                        key: e.bookId
                    })))))
                }
            }
            class ut extends s.a.Component {
                constructor(e) {
                    super(e), this.state = {
                        isLoading: !0,
                        books: []
                    }
                }
                componentDidMount() {
                    var e = this;
                    return Object(m.a)(l.a.mark((function t() {
                        var a, n, s, r;
                        return l.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0, t.next = 3, e.searchBooks();
                                case 3:
                                    for (a = t.sent, n = [], s = 0; s < a.hits.total; s++)(r = a.hits.hits[s] && a.hits.hits[s]._source) && n.push({
                                        author: r.author.S,
                                        category: r.category.S,
                                        cover: r.cover.S,
                                        id: r.id.S,
                                        name: r.name.S,
                                        price: r.price.N
                                    });
                                    e.setState({
                                        books: n
                                    }), t.next = 12;
                                    break;
                                case 9:
                                    t.prev = 9, t.t0 = t.catch(0), alert(t.t0);
                                case 12:
                                    e.setState({
                                        isLoading: !1
                                    });
                                case 13:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [0, 9]
                        ])
                    })))()
                }
                searchBooks() {
                    return d.a.get("search", "/search?q=".concat(this.props.match.params.id), null)
                }
                render() {
                    return this.state.isLoading ? s.a.createElement("div", {
                        className: "loader"
                    }) : s.a.createElement("div", null, s.a.createElement("div", {
                        className: "well-bs no-radius"
                    }, s.a.createElement("div", {
                        className: "container-category"
                    }, s.a.createElement("h3", null, "Search results"), s.a.createElement("div", {
                        className: "row"
                    }, this.state.books.map(e => s.a.createElement(pe, {
                        book: e,
                        key: e.id
                    }))))))
                }
            }
            class pt extends n.Component {
                render() {
                    return s.a.createElement("div", {
                        className: "Category"
                    }, s.a.createElement(M, null), s.a.createElement(C, null), s.a.createElement(ut, {
                        match: this.props.match
                    }))
                }
            }
            var ht = a(201),
                gt = a(75),
                Et = e => {
                    let t = e.component,
                        a = e.props,
                        n = Object(ht.a)(e, ["component", "props"]);
                    return s.a.createElement(gt.a, Object.assign({}, n, {
                        render: e => s.a.createElement(t, Object.assign({}, e, a))
                    }))
                };
            const At = e => s.a.createElement(v.a, null, s.a.createElement(Et, {
                path: "/",
                exact: !0,
                component: ze,
                props: e
            }), s.a.createElement(Et, {
                path: "/login",
                exact: !0,
                component: Te,
                props: e
            }), s.a.createElement(Et, {
                path: "/signup",
                exact: !0,
                component: He,
                props: e
            }), s.a.createElement(w.a, {
                path: "/best",
                exact: !0,
                component: dt
            }), s.a.createElement(w.a, {
                path: "/support",
                exact: !0,
                component: dt
            }), s.a.createElement(w.a, {
                path: "/cart",
                exact: !0,
                component: ot
            }), s.a.createElement(w.a, {
                path: "/category/:id",
                exact: !0,
                component: st
            }), s.a.createElement(w.a, {
                path: "/past",
                exact: !0,
                component: it
            }), s.a.createElement(w.a, {
                path: "/checkout",
                exact: !0,
                component: S
            }), s.a.createElement(w.a, {
                path: "/checkout-confirm",
                exact: !0,
                component: B
            }), s.a.createElement(w.a, {
                path: "/search/:id",
                exact: !0,
                component: pt
            }), s.a.createElement(w.a, {
                component: Ye
            }));
            class vt extends n.Component {
                constructor(e) {
                    var t;
                    super(e), t = this, this.userHasAuthenticated = e => {
                        this.setState({
                            isAuthenticated: e
                        })
                    }, this.handleLogout = Object(m.a)(l.a.mark((function e() {
                        return l.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, d.b.signOut();
                                case 2:
                                    t.userHasAuthenticated(!1), t.props.history.push("/login");
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))), this.showLoggedInBar = () => s.a.createElement(n.Fragment, null, s.a.createElement(u.LinkContainer, {
                        to: "/past"
                    }, s.a.createElement(g.a, null, s.a.createElement("span", {
                        className: "orange line-height-24"
                    }, "My account"))), s.a.createElement(u.LinkContainer, {
                        to: "http://support.octank.ab3.live/"
                    }, s.a.createElement(g.a, null, s.a.createElement("span", {
                        className: "orange line-height-24"
                    }, "Support"))), s.a.createElement(u.LinkContainer, {
                        to: "http://dashboard.octank.ab3.live/"
                    }, s.a.createElement(g.a, null, s.a.createElement("span", {
                        className: "orange line-height-24"
                    }, "Dashboard"))), s.a.createElement(u.LinkContainer, {
                        to: "/best"
                    }, s.a.createElement(g.a, null, s.a.createElement("span", {
                        className: "orange line-height-24"
                    }, "Best sellers"))), s.a.createElement(g.a, {
                        onClick: this.handleLogout
                    }, s.a.createElement("span", {
                        className: "orange line-height-24"
                    }, "Log out")), s.a.createElement(u.LinkContainer, {
                        to: "/cart"
                    }, s.a.createElement(g.a, null, s.a.createElement("div", {
                        className: "shopping-icon-container"
                    }, s.a.createElement("span", {
                        className: "glyphicon glyphicon-shopping-cart whitey4n",
                        "aria-hidden": "true"
                    }))))), this.showLoggedOutBar = () => s.a.createElement(n.Fragment, null, s.a.createElement(u.LinkContainer, {
                        to: "/signup"
                    }, s.a.createElement(g.a, null, s.a.createElement("span", {
                        className: "orange"
                    }, "Sign up"))), s.a.createElement(u.LinkContainer, {
                        to: "/login"
                    }, s.a.createElement(g.a, null, s.a.createElement("span", {
                        className: "orange"
                    }, "Log in")))), this.state = {
                        isAuthenticated: !1,
                        isAuthenticating: !0
                    }, document.title = "AB3 Demo"
                }
                componentDidMount() {
                    var e = this;
                    return Object(m.a)(l.a.mark((function t() {
                        return l.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0, t.next = 3, d.b.currentSession();
                                case 3:
                                    if (!t.sent) {
                                        t.next = 5;
                                        break
                                    }
                                    e.userHasAuthenticated(!0);
                                case 5:
                                    t.next = 10;
                                    break;
                                case 7:
                                    t.prev = 7, t.t0 = t.catch(0), "No current user" !== t.t0 && alert(t.t0);
                                case 10:
                                    e.setState({
                                        isAuthenticating: !1
                                    });
                                case 11:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [0, 7]
                        ])
                    })))()
                }
                render() {
                    const e = {
                        isAuthenticated: this.state.isAuthenticated,
                        userHasAuthenticated: this.userHasAuthenticated
                    };
                    return !this.state.isAuthenticating && s.a.createElement("div", {
                        className: "App container"
                    }, s.a.createElement(E.a, {
                        fluid: !0,
                        collapseOnSelect: !0
                    }, s.a.createElement(E.a.Header, null, s.a.createElement(E.a.Brand, null, s.a.createElement(p.a, {
                        to: "/"
                    }, s.a.createElement("span", {
                        className: "orange"
                    }, " ", s.a.createElement("img", {
                        src: "",
                        alt: ""
                    }), " OcTank Store North America"))), s.a.createElement(E.a.Toggle, null)), s.a.createElement(E.a.Collapse, null, s.a.createElement(A.a, {
                        pullRight: !0
                    }, this.state.isAuthenticated ? this.showLoggedInBar() : this.showLoggedOutBar()))), s.a.createElement(At, {
                        isAuthenticated: e.isAuthenticated,
                        userHasAuthenticated: e.userHasAuthenticated
                    }))
                }
            }
            var wt = Object(h.a)(vt);
            const bt = Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));

            function Ct(e) {
                navigator.serviceWorker.register(e).then(e => {
                    e.onupdatefound = () => {
                        const t = e.installing;
                        t && (t.onstatechange = () => {
                            "installed" === t.state && (navigator.serviceWorker.controller ? console.log("New content is available; please refresh.") : console.log("Content is cached for offline use."))
                        })
                    }
                }).catch(e => {
                    console.error("Error during service worker registration:", e)
                })
            }
            var kt = {
                    REGION: "us-west-2",
                    API_URL: "https://5ee8yexsa9.execute-api.us-west-2.amazonaws.com/prod"
                },
                Mt = {
                    REGION: "us-west-2",
                    USER_POOL_ID: "us-west-2_0LaEQGR9g",
                    APP_CLIENT_ID: "25vfpuhk0haundgt6j0rr1c68k",
                    IDENTITY_POOL_ID: "us-west-2:78866138-d5b3-473c-8703-ab2fc4b28ede"
                };
            a(664), a(665);
            d.c.configure({
                    Auth: {
                        mandatorySignIn: !0,
                        region: Mt.REGION,
                        userPoolId: Mt.USER_POOL_ID,
                        identityPoolId: Mt.IDENTITY_POOL_ID,
                        userPoolWebClientId: Mt.APP_CLIENT_ID
                    },
                    API: {
                        endpoints: [{
                            name: "books",
                            endpoint: kt.API_URL,
                            region: kt.REGION
                        }, {
                            name: "cart",
                            endpoint: kt.API_URL,
                            region: kt.REGION
                        }, {
                            name: "orders",
                            endpoint: kt.API_URL,
                            region: kt.REGION
                        }, {
                            name: "search",
                            endpoint: kt.API_URL,
                            region: kt.REGION
                        }, {
                            name: "recommendations",
                            endpoint: kt.API_URL,
                            region: kt.REGION
                        }, {
                            name: "bestsellers",
                            endpoint: kt.API_URL,
                            region: kt.REGION
                        }]
                    }
                }), o.a.render(s.a.createElement(c.a, null, s.a.createElement(wt, null)), document.getElementById("root")),
                function() {
                    if ("serviceWorker" in navigator) {
                        if (new URL("", window.location.toString()).origin !== window.location.origin) return;
                        window.addEventListener("load", () => {
                            const e = "".concat("", "/service-worker.js");
                            bt ? (! function(e) {
                                fetch(e).then(t => {
                                    404 === t.status || -1 === t.headers.get("content-type").indexOf("javascript") ? navigator.serviceWorker.ready.then(e => {
                                        e.unregister().then(() => {
                                            window.location.reload()
                                        })
                                    }) : Ct(e)
                                }).catch(() => {
                                    console.log("No internet connection found. App is running in offline mode.")
                                })
                            }(e), navigator.serviceWorker.ready.then(() => {
                                console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")
                            })) : Ct(e)
                        })
                    }
                }()
        },
        77: function(e, t, a) {
            e.exports = a.p + "static/media/yourshoppingcart.39c06f61.png"
        },
        84: function(e, t) {}
    },
    [
        [203, 1, 2]
    ]
]);
//# sourceMappingURL=main.5c593ccf.chunk.js.map