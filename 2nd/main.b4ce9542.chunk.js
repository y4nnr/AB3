(this["webpackJsonpaws-bookstore-demo-app"] = this["webpackJsonpaws-bookstore-demo-app"] || []).push([
    [0], {
        104: function(e, t, a) {
            e.exports = a.p + "static/media/hero-cookbooks.f06e69a7.png"
        },
        161: function(e, t, a) {},
        173: function(e, t, a) {
            e.exports = a.p + "static/media/supportedCards.0f89c06e.png"
        },
        179: function(e, t, a) {
            e.exports = a.p + "static/media/pastOrders.9fa03bfe.png"
        },
        180: function(e, t, a) {
            e.exports = a.p + "static/media/"
        },
        181: function(e, t, a) {
            e.exports = a.p + "static/media/yourpastorders.76f37cd9.png"
        },
        182: function(e, t, a) {
            e.exports = a.p + "static/media/hero-main.1c7e5e03.png"
        },
        183: function(e, t, a) {
            e.exports = a.p + "static/media/burgers.161c4a44.png"
        },
        184: function(e, t, a) {
            e.exports = a.p + "static/media/italian.92245953.png"
        },
        185: function(e, t, a) {
            e.exports = a.p + "static/media/noodles.86634adf.png"
        },
        186: function(e, t, a) {
            e.exports = a.p + "static/media/pancakes.22f42738.png"
        },
        187: function(e, t, a) {
            e.exports = a.p + "static/media/pineapple.203d8247.png"
        },
        188: function(e, t, a) {
            e.exports = a.p + "static/media/umami.c6f148dc.png"
        },
        189: function(e, t) {
            e.exports = ""
        },
        190: function(e, t, a) {
            e.exports = a.p + ""
        },
        191: function(e, t, a) {
            e.exports = a.p + ""
        },
        192: function(e, t) {
            e.exports = ""
        },
        193: function(e, t) {
            e.exports = ""
        },
        194: function(e, t, a) {
            e.exports = a.p + ""
        },
        195: function(e, t) {
            e.exports = ""
        },
        197: function(e, t, a) {
            e.exports = a.p + "static/media/hero-database.57fafec1.png"
        },
        198: function(e, t, a) {
            e.exports = a.p + "static/media/hero-cars.67a25963.png"
        },
        199: function(e, t, a) {
            e.exports = a.p + "static/media/hero-fairytales.ec14c774.png"
        },
        200: function(e, t, a) {
            e.exports = a.p + "static/media/hero-home.837f6ae9.png"
        },
        201: function(e, t, a) {
            e.exports = a.p + "static/media/hero-science.b62da370.png"
        },
        202: function(e, t, a) {
            e.exports = a.p + "static/media/hero-woodwork.3df92e23.png"
        },
        207: function(e, t, a) {
            e.exports = a(670)
        },
        212: function(e, t, a) {},
        50: function(e, t, a) {
            e.exports = a.p + "static/media/bestSellers.f95a983a.png"
        },
        56: function(e, t, a) {},
        611: function(e, t, a) {},
        612: function(e, t, a) {},
        613: function(e, t, a) {},
        614: function(e, t, a) {},
        645: function(e, t, a) {},
        646: function(e, t, a) {},
        647: function(e, t, a) {},
        650: function(e, t, a) {},
        651: function(e, t, a) {},
        652: function(e, t, a) {},
        670: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(0),
                r = a.n(n),
                c = a(58),
                o = a.n(c),
                s = a(147),
                i = (a(212), a(10)),
                l = a.n(i),
                u = a(16),
                m = a(6),
                d = a(7),
                p = a(9),
                h = a(8),
                g = a(12),
                E = a(28),
                A = a(59),
                v = a(165),
                b = a(676),
                f = a(680),
                k = a(679),
                w = (a(611), a(164)),
                C = a(74),
                M = {
                    books: "Books",
                    clothes: "Clothes",
                    computers: "Computers",
                    cards: "Gift Cards",
                    home: "Home Improvement",
                    phones: "Phones",
                    tv: "TV"
                },
                y = (a(612), function(e) {
                    Object(p.a)(a, e);
                    var t = Object(h.a)(a);

                    function a() {
                        return Object(m.a)(this, a), t.apply(this, arguments)
                    }
                    return Object(d.a)(a, [{
                        key: "render",
                        value: function() {
                            return r.a.createElement("ul", {
                                className: "nav nav-pills justify-content-center nav-cat"
                            }, Object.values(M).map((function(e) {
                                return r.a.createElement("li", {
                                    role: "presentation",
                                    key: e
                                }, r.a.createElement("a", {
                                    className: "category-link",
                                    href: "/category/".concat(e)
                                }, e))
                            })))
                        }
                    }]), a
                }(r.a.Component)),
                I = (a(613), a(171)),
                D = function(e) {
                    Object(p.a)(a, e);
                    var t = Object(h.a)(a);

                    function a(e) {
                        var n;
                        return Object(m.a)(this, a), (n = t.call(this, e)).handleChange = function(e) {
                            var t = e.currentTarget;
                            n.setState({
                                value: t.value
                            })
                        }, n.onSearch = function() {
                            n.setState({
                                redirect: "/search/".concat(n.state.value)
                            })
                        }, n.state = {
                            redirect: void 0,
                            value: ""
                        }, n
                    }
                    return Object(d.a)(a, [{
                        key: "render",
                        value: function() {
                            return r.a.createElement("form", {
                                className: "searchform mainsearch"
                            }, r.a.createElement("div", {
                                className: "row"
                            }, r.a.createElement("div", {
                                className: "col-md-8 search-padding"
                            }, r.a.createElement("div", {
                                className: "input-group"
                            }, r.a.createElement("div", {
                                className: "input-group-addon addon-black no-radius"
                            }, "Search"), r.a.createElement("input", {
                                type: "text",
                                className: "form-control no-radius",
                                id: "txtSearch",
                                value: this.state.value,
                                onChange: this.handleChange
                            }), r.a.createElement("div", {
                                className: "input-group-btn"
                            }, r.a.createElement("button", {
                                className: "btn btn-orange no-radius",
                                onClick: this.onSearch
                            }, r.a.createElement("span", {
                                className: "glyphicon glyphicon-search"
                            })), this.state.redirect && r.a.createElement(I.a, {
                                to: this.state.redirect
                            })))), r.a.createElement("div", {
                                className: "col-md-4 title-padding"
                            }, r.a.createElement("h3", {
                                className: "no-margin white"
                            }, "", r.a.createElement("span", {
                                className: "orange"
                            }, ""), ""))))
                        }
                    }]), a
                }(r.a.Component),
                j = a(107),
                N = a(673),
                O = a(674),
                L = a(675),
                x = a(681),
                S = (a(614), a(173)),
                Q = a.n(S),
                z = function(e) {
                    Object(p.a)(a, e);
                    var t = Object(h.a)(a);

                    function a(e) {
                        var n;
                        return Object(m.a)(this, a), (n = t.call(this, e)).getOrderTotal = function() {
                            return n.state.orders.reduce((function(e, t) {
                                return e + t.price * t.quantity
                            }), 0).toFixed(2)
                        }, n.handleChange = function(e) {
                            var t = e.target;
                            n.setState(Object(j.a)(Object(j.a)({}, n.state), {}, {
                                [t.name]: t.value
                            }))
                        }, n.onCheckout = function() {
                            var e = n.state.orders;
                            g.a.post("orders", "/orders", {
                                body: {
                                    books: e
                                }
                            }).then((function() {
                                return n.setState({
                                    toConfirm: !0
                                })
                            }))
                        }, n.state = {
                            card: "1010101010101010",
                            expDate: void 0,
                            ccv: "123",
                            isLoading: !0,
                            toCart: !1,
                            orders: [],
                            toConfirm: !1
                        }, n
                    }
                    return Object(d.a)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = Object(u.a)(l.a.mark((function e() {
                                var t;
                                return l.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, this.listOrdersInCart();
                                        case 3:
                                            t = e.sent, this.setState({
                                                orders: t
                                            }), e.next = 10;
                                            break;
                                        case 7:
                                            e.prev = 7, e.t0 = e.catch(0), alert(e.t0);
                                        case 10:
                                            this.setState({
                                                isLoading: !1
                                            });
                                        case 11:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [0, 7]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "listOrdersInCart",
                        value: function() {
                            return g.a.get("cart", "/cart", null)
                        }
                    }, {
                        key: "getCardNumberValidationState",
                        value: function() {
                            var e = this.state.card.length;
                            return e >= 15 && e <= 19 ? "success" : 0 !== e && (e < 15 || e > 19) ? "error" : null
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return this.state.toConfirm ? r.a.createElement(I.a, {
                                to: "/checkout-confirm"
                            }) : this.state.isLoading ? null : r.a.createElement("div", {
                                className: "well-bs col-md-12 full-page no-padding-top"
                            }, r.a.createElement("div", {
                                className: "white-box no-margin-top"
                            }, r.a.createElement("div", {
                                className: "checkout "
                            }, r.a.createElement("img", {
                                src: Q.a,
                                alt: "Supported cards"
                            }), r.a.createElement(N.a, null, r.a.createElement(O.a, {
                                controlId: "card",
                                validationState: this.getCardNumberValidationState()
                            }, r.a.createElement(L.a, null, "Card number"), r.a.createElement(x.a, {
                                name: "card",
                                type: "text",
                                value: this.state.card,
                                onChange: this.handleChange
                            }), r.a.createElement(x.a.Feedback, null)), r.a.createElement("div", {
                                className: "form-row"
                            }, r.a.createElement(O.a, {
                                controlId: "expDate"
                            }, r.a.createElement(L.a, null, "Expiration date"), r.a.createElement(x.a, {
                                name: "expDate",
                                type: "date",
                                value: this.state.expDate,
                                onChange: this.handleChange
                            }), r.a.createElement(x.a.Feedback, null)), r.a.createElement(O.a, {
                                className: "ccv",
                                controlId: "ccv"
                            }, r.a.createElement(L.a, null, "CCV"), r.a.createElement(x.a, {
                                name: "ccv",
                                type: "text",
                                value: this.state.ccv,
                                onChange: this.handleChange
                            }), r.a.createElement(x.a.Feedback, null)))))), r.a.createElement("div", {
                                className: "pull-right"
                            }, r.a.createElement("button", {
                                className: "btn btn-black",
                                type: "button",
                                onClick: this.onCheckout
                            }, "Pay (€".concat(this.getOrderTotal(), ")"))))
                        }
                    }]), a
                }(r.a.Component),
                W = function(e) {
                    Object(p.a)(a, e);
                    var t = Object(h.a)(a);

                    function a() {
                        return Object(m.a)(this, a), t.apply(this, arguments)
                    }
                    return Object(d.a)(a, [{
                        key: "render",
                        value: function() {
                            return r.a.createElement("div", null, r.a.createElement(D, null), r.a.createElement(y, null), r.a.createElement("div", {
                                className: "well-bs"
                            }, r.a.createElement("div", {
                                className: "white-box no-margin-top no-margin-bottom"
                            }, r.a.createElement("h3", null, "Checkout"))), r.a.createElement(z, null))
                        }
                    }]), a
                }(n.Component),
                B = a(50),
                T = a.n(B),
                Y = a(179),
                V = a.n(Y),
                P = (a(645), function(e) {
                    Object(p.a)(a, e);
                    var t = Object(h.a)(a);

                    function a(e) {
                        var n;
                        return Object(m.a)(this, a), (n = t.call(this, e)).onViewReceipt = function() {
                            n.setState({
                                toPastOrders: !0
                            })
                        }, n.state = {
                            toPastOrders: !1
                        }, n
                    }
                    return Object(d.a)(a, [{
                        key: "render",
                        value: function() {
                            return this.state.toPastOrders ? r.a.createElement(I.a, {
                                to: "/past"
                            }) : r.a.createElement("div", null, r.a.createElement(D, null), r.a.createElement(y, null), r.a.createElement("div", {
                                className: "well-bs"
                            }, r.a.createElement("div", {
                                className: "white-box no-margin-top no-margin-bottom"
                            }, r.a.createElement("h3", null, "Purchase confirmed"))), r.a.createElement("div", {
                                className: "well-bs full-page no-padding-bottom no-padding-top"
                            }, r.a.createElement("div", {
                                className: "white-box padding-50 no-margin-top col-md-12 no-margin-bottom"
                            }, r.a.createElement("h4", {
                                className: "text-center"
                            }, "Your purchase is complete!"), r.a.createElement("button", {
                                className: "btn btn-black btn-black-center",
                                type: "button",
                                onClick: this.onViewReceipt
                            }, "View Receipt")),))
                        }
                    }]), a
                }(n.Component)),
                H = a(180),
                G = a.n(H),
                J = a(181),
                X = a.n(J),
                U = a(81),
                K = a.n(U),
                F = a(182),
                q = a.n(F),
                Z = (a(69), function(e) {
                    Object(p.a)(a, e);
                    var t = Object(h.a)(a);

                    function a() {
                        return Object(m.a)(this, a), t.apply(this, arguments)
                    }
                    return Object(d.a)(a, [{
                        key: "render",
                        value: function() {
                            return r.a.createElement("img", {
                                src: q.a,
                                className: "img-fluid full-width",
                                alt: "The more you read the more you know"
                            })
                        }
                    }]), a
                }(r.a.Component)),
                R = (a(56), a(183)),
                _ = a.n(R),
                $ = a(184),
                ee = a.n($),
                te = a(185),
                ae = a.n(te),
                ne = a(186),
                re = a.n(ne),
                ce = a(187),
                oe = a.n(ce),
                se = a(188),
                ie = a.n(se),
                le = [_.a, ee.a, ae.a, re.a, oe.a, ie.a],
                ue = function(e) {
                    Object(p.a)(a, e);
                    var t = Object(h.a)(a);

                    function a() {
                        return Object(m.a)(this, a), t.apply(this, arguments)
                    }
                    return Object(d.a)(a, [{
                        key: "render",
                        value: function() {
                            return null
                        }
                    }]), a
                }(r.a.Component),
                me = a(178),
                de = (a(646), function(e) {
                    Object(p.a)(a, e);
                    var t = Object(h.a)(a);

                    function a() {
                        return Object(m.a)(this, a), t.apply(this, arguments)
                    }
                    return Object(d.a)(a, [{
                        key: "render",
                        value: function() {
                            return r.a.createElement("span", null, r.a.createElement(me.a, {
                                glyph: this.props.stars >= 1 ? "star" : "star-empty1"
                            }), r.a.createElement(me.a, {
                                glyph: this.props.stars >= 2 ? "star" : "star-empty2"
                            }), r.a.createElement(me.a, {
                                glyph: this.props.stars >= 3 ? "star" : "star-empty3"
                            }), r.a.createElement(me.a, {
                                glyph: this.props.stars >= 4 ? "star" : "star-empty4"
                            }), r.a.createElement(me.a, {
                                glyph: this.props.stars >= 5 ? "star" : "star-empty5"
                            }))
                        }
                    }]), a
                }(r.a.Component)),
                pe = function(e) {
                    Object(p.a)(a, e);
                    var t = Object(h.a)(a);

                    function a(e) {
                        var n;
                        return Object(m.a)(this, a), (n = t.call(this, e)).onAddToCart = Object(u.a)(l.a.mark((function e() {
                            var t;
                            return l.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return n.setState({
                                            loading: !0
                                        }), e.next = 3, g.a.get("cart", "/cart/".concat(n.props.bookId), null);
                                    case 3:
                                        (t = e.sent) ? g.a.put("cart", "/cart", {
                                            body: {
                                                bookId: n.props.bookId,
                                                quantity: t.quantity + 1
                                            }
                                        }).then((function() {
                                            return n.setState({
                                                toCart: !0
                                            })
                                        })): g.a.post("cart", "/cart", {
                                            body: {
                                                bookId: n.props.bookId,
                                                price: n.props.price,
                                                quantity: 1
                                            }
                                        }).then((function() {
                                            return n.setState({
                                                toCart: !0
                                            })
                                        }));
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), n.getVariant = function() {
                            return n.props.variant && "center" === n.props.variant ? "btn btn-black btn-black-center" : "btn btn-black pull-right"
                        }, n.state = {
                            loading: !1,
                            toCart: !1
                        }, n
                    }
                    return Object(d.a)(a, [{
                        key: "render",
                        value: function() {
                            return this.state.toCart ? r.a.createElement(I.a, {
                                to: "/cart"
                            }) : r.a.createElement("button", {
                                className: this.getVariant(),
                                disabled: this.state.loading,
                                type: "button",
                                onClick: this.onAddToCart
                            }, this.state.loading && r.a.createElement(me.a, {
                                glyph: "refresh",
                                className: "spinning"
                            }), "buyAgain" === this.props.variant ? "Buy again" : "Add to cart")
                        }
                    }]), a
                }(r.a.Component),
                he = function(e) {
                    Object(p.a)(a, e);
                    var t = Object(h.a)(a);

                    function a() {
                        return Object(m.a)(this, a), t.apply(this, arguments)
                    }
                    return Object(d.a)(a, [{
                        key: "render",
                        value: function() {
                            if (this.props.book) return r.a.createElement("div", {
                                className: "col-sm-3 col-md-3"
                            }, r.a.createElement("div", {
                                className: "thumbnail no-border"
                            }, r.a.createElement("p", {
                                className: "rating-container"
                            }, r.a.createElement(de, {
                                stars: this.props.book.rating1
                            }), r.a.createElement("span", {
                                className: "pull-right"
                            }, "€".concat(this.props.book.price))), r.a.createElement("img", {
                                src: this.props.book.cover,
                                alt: "".concat(this.props.book.name, " cover")
                            }), r.a.createElement("div", {
                                className: "caption"
                            }, r.a.createElement("h4", {
                                className: "text-center"
                            }, this.props.book.name), r.a.createElement(pe, {
                                bookId: this.props.book.id,
                                price: this.props.book.price,
                                variant: "center"
                            }))))
                        }
                    }]), a
                }(r.a.Component),
                ge = function(e) {
                    Object(p.a)(a, e);
                    var t = Object(h.a)(a);

                    function a(e) {
                        var n;
                        return Object(m.a)(this, a), (n = t.call(this, e)).state = {
                            isLoading: !0,
                            books: []
                        }, n
                    }
                    return Object(d.a)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = Object(u.a)(l.a.mark((function e() {
                                var t;
                                return l.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, this.listBooks();
                                        case 3:
                                            t = e.sent, this.setState({
                                                books: t
                                            }), e.next = 10;
                                            break;
                                        case 7:
                                            e.prev = 7, e.t0 = e.catch(0), alert(e.t0);
                                        case 10:
                                            this.setState({
                                                isLoading: !1
                                            });
                                        case 11:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [0, 7]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "listBooks",
                        value: function() {
                            return g.a.get("books", "/books?category=Cookbooks", null)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return null
                        }
                    }]), a
                }(r.a.Component),
                Ee = (a(70), a(189)),
                Ae = a.n(Ee),
                ve = a(190),
                be = a.n(ve),
                fe = a(191),
                ke = a.n(fe),
                we = a(192),
                Ce = a.n(we),
                Me = a(193),
                ye = a.n(Me),
                Ie = a(194),
                De = a.n(Ie),
                je = a(195),
                Ne = a.n(je),
                Oe = [Ae.a, be.a, ke.a, Ce.a, ye.a, De.a, Ne.a],
                Le = function(e) {
                    Object(p.a)(a, e);
                    var t = Object(h.a)(a);

                    function a() {
                        return Object(m.a)(this, a), t.apply(this, arguments)
                    }
                    return Object(d.a)(a, [{
                        key: "render",
                        value: function() {
                            var e = Oe[Math.floor(Math.random() * Oe.length)];
                            return r.a.createElement("img", {
                                className: "friend-thumb"
                            })
                        }
                    }]), a
                }(r.a.Component),
                xe = function(e) {
                    Object(p.a)(a, e);
                    var t = Object(h.a)(a);

                    function a(e) {
                        var n;
                        return Object(m.a)(this, a), (n = t.call(this, e)).getFriends = function() {
                            return g.a.get("recommendations", "/recommendations/".concat(n.props.bookId), null)
                        }, n.state = {
                            friends: []
                        }, n
                    }
                    return Object(d.a)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = Object(u.a)(l.a.mark((function e() {
                                var t;
                                return l.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, this.getFriends();
                                        case 3:
                                            t = e.sent, this.setState({
                                                friends: t
                                            }), e.next = 10;
                                            break;
                                        case 7:
                                            e.prev = 7, e.t0 = e.catch(0), alert(e.t0);
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [0, 7]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "render",
                        value: function() {
                            if (!(this.state.friends[0] && this.state.friends[0].friendsPurchased && this.state.friends[0].friendsPurchased.length > 0)) return r.a.createElement("div", {
                                className: "no-friends-padding"
                            });
                            var e = this.state.friends[0].friendsPurchased.length,
                                t = this.state.friends[0].friendsPurchased;
                            return r.a.createElement("div", null, r.a.createElement("div", null, ""), r.a.createElement("p", null, t.slice(0, 3).map((function(e) {
                                return r.a.createElement(Le, {
                                    key: e
                                })
                            })), e > 3 && r.a.createElement("span", {
                                className: "orange"
                            })))
                        }
                    }]), a
                }(r.a.Component),
                Se = function(e) {
                    Object(p.a)(a, e);
                    var t = Object(h.a)(a);

                    function a(e) {
                        var n;
                        return Object(m.a)(this, a), (n = t.call(this, e)).state = {
                            book: void 0
                        }, n
                    }
                    return Object(d.a)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            g.a.get("books", "/books/".concat(this.props.bookId), null).then((function(t) {
                                return e.setState({
                                    book: t
                                })
                            })).catch((function(e) {
                                return alert(e)
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return this.state.book ? r.a.createElement("div", {
                                className: "white-box"
                            }, r.a.createElement("div", {
                                className: "media"
                            }, r.a.createElement("div", {
                                className: "media-left media-middle no-padding"
                            }, r.a.createElement("img", {
                                className: "product-thumb border",
                                src: this.state.book.cover,
                                alt: "".concat(this.state.book.name, " cover")
                            })), r.a.createElement("div", {
                                className: "media-body product-padding padding-20"
                            }, r.a.createElement("h3", {
                                className: "media-heading"
                            }, this.state.book.name, r.a.createElement("small", {
                                className: "pull-right "
                            }, "€", this.state.book.price)), r.a.createElement("p", {
                                className: "no-margin"
                            }, r.a.createElement("small", null, this.state.book.category)), r.a.createElement(xe, {
                                bookId: this.props.bookId
                            }), r.a.createElement("div", null, "", r.a.createElement(pe, {
                                bookId: this.state.book.id,
                                price: this.state.book.price
                            })), r.a.createElement(de, {
                                stars: this.state.book.rating3
                            })))) : null
                        }
                    }]), a
                }(r.a.Component),
                Qe = function(e) {
                    Object(p.a)(a, e);
                    var t = Object(h.a)(a);

                    function a(e) {
                        var n;
                        return Object(m.a)(this, a), (n = t.call(this, e)).state = {
                            isLoading: !0,
                            recommendations: []
                        }, n
                    }
                    return Object(d.a)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            g.a.get("recommendations", "/recommendations", null).then((function(t) {
                                e.setState({
                                    recommendations: t,
                                    isLoading: !1
                                })
                            })).catch((function(e) {
                                return alert(e)
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return null
                        }
                    }]), a
                }(r.a.Component),
                ze = (a(161), function(e) {
                    Object(p.a)(a, e);
                    var t = Object(h.a)(a);

                    function a(e) {
                        var n;
                        return Object(m.a)(this, a), (n = t.call(this, e)).state = {
                            isLoading: !0
                        }, n
                    }
                    return Object(d.a)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = Object(u.a)(l.a.mark((function e() {
                                return l.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (this.props.isAuthenticated) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 2:
                                            this.setState({
                                                isLoading: !1
                                            });
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "renderLanding",
                        value: function() {
                            return r.a.createElement("div", {
                                className: "lander"
                            }, r.a.createElement("h1", null, "Website built for AB3"), r.a.createElement("hr", null), r.a.createElement("p", null, "", r.a.createElement("a", {
                                href: "https://github.com/aws-samples/aws-bookstore-demo-app",
                                target: "_blank"
                            }, ""), ""), r.a.createElement("div", {
                                className: "button-container col-md-12"
                            }, r.a.createElement(E.LinkContainer, {
                                to: "/signup"
                            }, r.a.createElement("a", {
                                href: "/signup"
                            }, "Sign up to access OcTank Store"))), r.a.createElement("img", {
                                src: G.a,
                                className: "img-fluid full-width",
                                alt: ""
                            }),)
                        }
                    }, {
                        key: "renderHome",
                        value: function() {
                            return r.a.createElement("div", {
                                className: "bookstore"
                            }, r.a.createElement(Z, null), r.a.createElement(D, null), r.a.createElement(y, null), r.a.createElement(ue, null),)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return r.a.createElement("div", {
                                className: "Home"
                            }, this.props.isAuthenticated ? this.renderHome() : this.renderLanding())
                        }
                    }]), a
                }(n.Component)),
                We = a(677),
                Be = (a(647), /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
                Te = function(e) {
                    Object(p.a)(a, e);
                    var t = Object(h.a)(a);

                    function a(e) {
                        var n;
                        return Object(m.a)(this, a), (n = t.call(this, e)).onEmailChange = function(e) {
                            var t = e.target;
                            n.setState({
                                email: t.value,
                                emailValid: Be.test(t.value.toLowerCase()) ? "success" : "error"
                            })
                        }, n.onPasswordChange = function(e) {
                            var t = e.target;
                            n.setState({
                                password: t.value,
                                passwordValid: t.value.length < 8 ? "error" : "success"
                            })
                        }, n.onLogin = function() {
                            var e = Object(u.a)(l.a.mark((function e(t) {
                                return l.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t.preventDefault(), n.setState({
                                                loading: !0
                                            }), e.prev = 2, e.next = 5, g.b.signIn(n.state.email, n.state.password);
                                        case 5:
                                            n.props.userHasAuthenticated(!0), n.setState({
                                                redirect: !0
                                            }), e.next = 13;
                                            break;
                                        case 9:
                                            e.prev = 9, e.t0 = e.catch(2), alert(e.t0.message), n.setState({
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
                        }(), n.state = {
                            loading: !1,
                            redirect: !1,
                            email: "",
                            password: "",
                            emailValid: void 0,
                            passwordValid: void 0
                        }, n
                    }
                    return Object(d.a)(a, [{
                        key: "render",
                        value: function() {
                            return this.state.redirect ? r.a.createElement(I.a, {
                                to: "/"
                            }) : r.a.createElement("div", {
                                className: "Login"
                            }, r.a.createElement("form", {
                                onSubmit: this.onLogin
                            }, r.a.createElement(O.a, {
                                controlId: "email",
                                validationState: this.state.emailValid
                            }, r.a.createElement(L.a, null, "Email"), r.a.createElement(x.a, {
                                name: "email",
                                type: "email",
                                bsSize: "large",
                                value: this.state.email,
                                onChange: this.onEmailChange
                            }), r.a.createElement(x.a.Feedback, null)), r.a.createElement(O.a, {
                                controlId: "password",
                                validationState: this.state.passwordValid
                            }, r.a.createElement(L.a, null, "Password"), r.a.createElement(x.a, {
                                name: "password",
                                type: "password",
                                bsSize: "large",
                                value: this.state.password,
                                onChange: this.onPasswordChange
                            }), r.a.createElement(x.a.Feedback, null)), r.a.createElement(We.a, {
                                block: !0,
                                bsSize: "large",
                                type: "submit",
                                disabled: "success" !== this.state.passwordValid || "success" !== this.state.emailValid
                            }, this.state.loading && r.a.createElement(me.a, {
                                glyph: "refresh",
                                className: "spinning"
                            }), "Log in")))
                        }
                    }]), a
                }(r.a.Component),
                Ye = (a(650), function() {
                    return r.a.createElement("div", {
                        className: "not-found"
                    }, r.a.createElement("h3", null, "Sorry, page not found!"))
                }),
                Ve = a(678),
                Pe = (a(651), /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
                He = function(e) {
                    Object(p.a)(a, e);
                    var t = Object(h.a)(a);

                    function a(e) {
                        var n;
                        return Object(m.a)(this, a), (n = t.call(this, e)).onEmailChange = function(e) {
                            var t = e.target;
                            n.setState({
                                email: t.value,
                                emailValid: Pe.test(t.value.toLowerCase()) ? "success" : "error"
                            })
                        }, n.onPasswordChange = function(e) {
                            var t = e.target;
                            n.setState({
                                password: t.value,
                                passwordValid: t.value.length < 8 ? "error" : "success"
                            })
                        }, n.onConfirmPasswordChange = function(e) {
                            var t = e.target;
                            n.setState({
                                confirmPassword: t.value,
                                confirmPasswordValid: t.value !== n.state.password ? "error" : "success"
                            })
                        }, n.onConfirmationCodeChange = function(e) {
                            var t = e.target;
                            n.setState({
                                confirmationCode: t.value,
                                confirmationCodeValid: t.value.length > 0 ? "error" : "success"
                            })
                        }, n.onSignup = function() {
                            var e = Object(u.a)(l.a.mark((function e(t) {
                                var a;
                                return l.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t.preventDefault(), n.setState({
                                                loading: !0
                                            }), e.prev = 2, e.next = 5, g.b.signUp({
                                                username: n.state.email,
                                                password: n.state.password
                                            });
                                        case 5:
                                            a = e.sent, n.setState({
                                                user: a,
                                                loading: !1
                                            }), e.next = 13;
                                            break;
                                        case 9:
                                            e.prev = 9, e.t0 = e.catch(2), alert(e.t0.message), n.setState({
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
                        }(), n.onConfirm = function() {
                            var e = Object(u.a)(l.a.mark((function e(t) {
                                return l.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t.preventDefault(), n.setState({
                                                loading: !0
                                            }), e.prev = 2, e.next = 5, g.b.confirmSignUp(n.state.email, n.state.confirmationCode);
                                        case 5:
                                            return e.next = 7, g.b.signIn(n.state.email, n.state.password);
                                        case 7:
                                            n.props.userHasAuthenticated(!0), n.setState({
                                                redirect: !0
                                            }), e.next = 15;
                                            break;
                                        case 11:
                                            e.prev = 11, e.t0 = e.catch(2), alert(e.t0.message), n.setState({
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
                        }(), n.showConfirmationForm = function() {
                            return n.state.redirect ? r.a.createElement(I.a, {
                                to: "/"
                            }) : r.a.createElement("form", {
                                onSubmit: n.onConfirm
                            }, r.a.createElement(O.a, {
                                controlId: "confirmationCode"
                            }, r.a.createElement(L.a, null, "Confirmation code"), r.a.createElement(x.a, {
                                name: "code",
                                type: "tel",
                                bsSize: "large",
                                value: n.state.confirmationCode,
                                onChange: n.onConfirmationCodeChange
                            }), r.a.createElement(x.a.Feedback, null), r.a.createElement(Ve.a, null, "A confirmation code will be sent to the email address provided")), r.a.createElement(We.a, {
                                block: !0,
                                bsSize: "large",
                                type: "submit",
                                disabled: "success" === n.state.confirmationCodeValid
                            }, n.state.loading && r.a.createElement(me.a, {
                                glyph: "refresh",
                                className: "spinning"
                            }), "Confirm"))
                        }, n.showSignupForm = function() {
                            return r.a.createElement("form", {
                                onSubmit: n.onSignup
                            }, r.a.createElement(O.a, {
                                controlId: "email",
                                validationState: n.state.emailValid
                            }, r.a.createElement(L.a, null, "Email"), r.a.createElement(x.a, {
                                name: "email",
                                type: "email",
                                bsSize: "large",
                                value: n.state.email,
                                onChange: n.onEmailChange
                            }), r.a.createElement(x.a.Feedback, null)), r.a.createElement(O.a, {
                                controlId: "password",
                                validationState: n.state.passwordValid
                            }, r.a.createElement(L.a, null, "Password"), r.a.createElement(x.a, {
                                name: "password",
                                type: "password",
                                bsSize: "large",
                                value: n.state.password,
                                onChange: n.onPasswordChange
                            }), r.a.createElement(x.a.Feedback, null), r.a.createElement(Ve.a, null, "Must be at least 8 characters")), r.a.createElement(O.a, {
                                controlId: "confirmPassword",
                                validationState: n.state.confirmPasswordValid
                            }, r.a.createElement(L.a, null, "Confirm Password"), r.a.createElement(x.a, {
                                name: "confirmPassword",
                                type: "password",
                                bsSize: "large",
                                value: n.state.confirmPassword,
                                onChange: n.onConfirmPasswordChange
                            }), r.a.createElement(x.a.Feedback, null)), r.a.createElement(We.a, {
                                block: !0,
                                bsSize: "large",
                                type: "submit",
                                disabled: "success" !== n.state.passwordValid || "success" !== n.state.confirmPasswordValid || "success" !== n.state.emailValid
                            }, n.state.loading && r.a.createElement(me.a, {
                                glyph: "refresh",
                                className: "spinning"
                            }), "Log in"))
                        }, n.state = {
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
                        }, n
                    }
                    return Object(d.a)(a, [{
                        key: "render",
                        value: function() {
                            return r.a.createElement("div", {
                                className: "Signup"
                            }, void 0 === this.state.user ? this.showSignupForm() : this.showConfirmationForm())
                        }
                    }]), a
                }(r.a.Component),
                Ge = function(e) {
                    Object(p.a)(a, e);
                    var t = Object(h.a)(a);

                    function a(e) {
                        var n;
                        return Object(m.a)(this, a), (n = t.call(this, e)).state = {
                            isLoading: !0,
                            books: []
                        }, n
                    }
                    return Object(d.a)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = Object(u.a)(l.a.mark((function e() {
                                var t;
                                return l.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, this.listBooks();
                                        case 3:
                                            t = e.sent, this.setState({
                                                books: t
                                            }), e.next = 10;
                                            break;
                                        case 7:
                                            e.prev = 7, e.t0 = e.catch(0), alert(e.t0);
                                        case 10:
                                            this.setState({
                                                isLoading: !1
                                            });
                                        case 11:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [0, 7]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "listBooks",
                        value: function() {
                            return g.a.get("books", "/books?category=".concat(this.props.match.params.id), null)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return this.state.isLoading ? r.a.createElement("div", {
                                className: "loader"
                            }) : r.a.createElement("div", null, r.a.createElement("div", {
                                className: "well-bs no-radius"
                            }, r.a.createElement("div", {
                                className: "container-category"
                            }, r.a.createElement("h3", null, this.props.match.params.id), r.a.createElement("div", {
                                className: "row"
                            }, this.state.books.map((function(e) {
                                return r.a.createElement(he, {
                                    book: e,
                                    key: e.id
                                })
                            }))))))
                        }
                    }]), a
                }(r.a.Component),
                Je = a(197),
                Xe = a.n(Je),
                Ue = a(198),
                Ke = a.n(Ue),
                Fe = a(104),
                qe = a.n(Fe),
                Ze = a(199),
                Re = a.n(Ze),
                _e = a(200),
                $e = a.n(_e),
                et = a(201),
                tt = a.n(et),
                at = a(202),
                nt = a.n(at),
                rt = function(e) {
                    Object(p.a)(a, e);
                    var t = Object(h.a)(a);

                    function a() {
                        var e;
                        Object(m.a)(this, a);
                        for (var n = arguments.length, r = new Array(n), c = 0; c < n; c++) r[c] = arguments[c];
                        return (e = t.call.apply(t, [this].concat(r))).getImage = function() {
                            switch (e.props.match.params.id) {
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
                        }, e
                    }
                    return Object(d.a)(a, [{
                        key: "render",
                        value: function() {
                            return r.a.createElement("div", {
                                className: "Category"
                            }, r.a.createElement(D, null), r.a.createElement(y, null), r.a.createElement(ue, null), r.a.createElement("img", {
                                src: this.getImage(),
                                alt: "".concat(this.getImage(), " hero"),
                                className: "img-fluid full-width top-hero-padding"
                            }), r.a.createElement(Ge, {
                                match: this.props.match
                            }))
                        }
                    }]), a
                }(n.Component),
                ct = function(e) {
                    Object(p.a)(a, e);
                    var t = Object(h.a)(a);

                    function a(e) {
                        var n;
                        return Object(m.a)(this, a), (n = t.call(this, e)).onRemove = Object(u.a)(l.a.mark((function e() {
                            return l.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return n.setState({
                                            removeLoading: !0
                                        }), e.next = 3, g.a.del("cart", "/cart", {
                                            body: {
                                                bookId: n.props.order.bookId
                                            }
                                        });
                                    case 3:
                                        n.props.calculateTotal();
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), n.onQuantityUpdated = function() {
                            var e = Object(u.a)(l.a.mark((function e(t) {
                                return l.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, g.a.put("cart", "/cart", {
                                                body: {
                                                    bookId: n.props.order.bookId,
                                                    quantity: parseInt(t.target.value, 10)
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
                        }(), n.state = {
                            book: void 0,
                            removeLoading: !1
                        }, n
                    }
                    return Object(d.a)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = Object(u.a)(l.a.mark((function e() {
                                var t;
                                return l.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, this.getBook(this.props.order);
                                        case 3:
                                            t = e.sent, this.setState({
                                                book: t
                                            }), e.next = 10;
                                            break;
                                        case 7:
                                            e.prev = 7, e.t0 = e.catch(0), alert(e.t0);
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [0, 7]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "getBook",
                        value: function(e) {
                            return g.a.get("books", "/books/".concat(e.bookId), null)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return this.state.book ? r.a.createElement("div", {
                                className: "white-box"
                            }, r.a.createElement("div", {
                                className: "media"
                            }, r.a.createElement("div", {
                                className: "media-left media-middle"
                            }, r.a.createElement("img", {
                                className: "media-object product-thumb",
                                src: this.state.book.cover,
                                alt: "".concat(this.state.book.name, " cover")
                            })), r.a.createElement("div", {
                                className: "media-body"
                            }, r.a.createElement("h3", {
                                className: "media-heading"
                            }, this.state.book.name, r.a.createElement("div", {
                                className: "pull-right margin-1"
                            }, r.a.createElement("small", null, "€", this.state.book.price))), r.a.createElement("p", null, r.a.createElement("small", null, this.state.book.category)), r.a.createElement(xe, {
                                bookId: this.props.order.bookId
                            }), r.a.createElement("div", null, "", r.a.createElement("div", {
                                className: "pull-right"
                            }, r.a.createElement("div", {
                                className: "input-group"
                            }, r.a.createElement("input", {
                                type: "number",
                                className: "form-control",
                                placeholder: "Quantity",
                                defaultValue: this.props.order.quantity.toString(),
                                onChange: this.onQuantityUpdated,
                                min: 1
                            }), r.a.createElement("span", {
                                className: "input-group-btn"
                            }, r.a.createElement("button", {
                                className: "btn btn-black",
                                type: "button",
                                onClick: this.onRemove,
                                disabled: this.state.removeLoading
                            }, this.state.removeLoading && r.a.createElement(me.a, {
                                glyph: "refresh",
                                className: "spinning"
                            }), "Remove"))))), r.a.createElement("p", null, r.a.createElement(de, {
                                stars: this.state.book.rating4
                            }))))) : null
                        }
                    }]), a
                }(r.a.Component),
                ot = (a(652), function(e) {
                    Object(p.a)(a, e);
                    var t = Object(h.a)(a);

                    function a(e) {
                        var n;
                        return Object(m.a)(this, a), (n = t.call(this, e)).getOrderTotal = Object(u.a)(l.a.mark((function e() {
                            var t, a;
                            return l.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, n.listOrdersInCart();
                                    case 2:
                                        t = e.sent, n.setState({
                                            orders: t
                                        }), a = t.reduce((function(e, t) {
                                            return e + t.price * t.quantity
                                        }), 0).toFixed(2), n.setState({
                                            orderTotal: a
                                        });
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), n.onCheckout = function() {
                            n.setState({
                                toCheckout: !0
                            })
                        }, n.state = {
                            isLoading: !0,
                            orders: [],
                            orderTotal: void 0,
                            toCheckout: !1
                        }, n
                    }
                    return Object(d.a)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = Object(u.a)(l.a.mark((function e() {
                                var t;
                                return l.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, this.listOrdersInCart();
                                        case 3:
                                            t = e.sent, this.setState({
                                                orders: t
                                            }), e.next = 10;
                                            break;
                                        case 7:
                                            e.prev = 7, e.t0 = e.catch(0), alert(e.t0);
                                        case 10:
                                            this.getOrderTotal(), this.setState({
                                                isLoading: !1
                                            });
                                        case 12:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [0, 7]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "listOrdersInCart",
                        value: function() {
                            return g.a.get("cart", "/cart", null)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this;
                            return this.state.toCheckout ? r.a.createElement(I.a, {
                                to: "/checkout"
                            }) : this.state.isLoading ? r.a.createElement("div", {
                                className: "loader"
                            }) : r.a.createElement("div", {
                                className: "Category"
                            }, r.a.createElement(D, null), r.a.createElement(y, null), r.a.createElement("div", {
                                className: "well-bs padding-bottom-120"
                            }, r.a.createElement("div", {
                                className: "white-box no-margin-top"
                            }, r.a.createElement("h3", null, "Shopping cart")), this.state.orders.map((function(t) {
                                return r.a.createElement(ct, {
                                    order: t,
                                    key: t.bookId,
                                    calculateTotal: function() {
                                        return e.getOrderTotal()
                                    }
                                })
                            })), r.a.createElement("div", {
                                className: "pull-right checkout-padding"
                            }, r.a.createElement("button", {
                                className: "btn btn-black",
                                type: "button",
                                disabled: this.state.orders.length < 1,
                                onClick: this.onCheckout
                            }, "Checkout"))), r.a.createElement("div", {
                                className: "well-bs col-md-12 full-page"
                            }))
                        }
                    }]), a
                }(n.Component)),
                st = function(e) {
                    Object(p.a)(a, e);
                    var t = Object(h.a)(a);

                    function a(e) {
                        var n;
                        return Object(m.a)(this, a), (n = t.call(this, e)).state = {
                            book: void 0
                        }, n
                    }
                    return Object(d.a)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = Object(u.a)(l.a.mark((function e() {
                                var t;
                                return l.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, this.getBook(this.props.order);
                                        case 3:
                                            t = e.sent, this.setState({
                                                book: t
                                            }), e.next = 10;
                                            break;
                                        case 7:
                                            e.prev = 7, e.t0 = e.catch(0), alert(e.t0);
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [0, 7]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "getBook",
                        value: function(e) {
                            return g.a.get("books", "/books/".concat(e.bookId), null)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return this.state.book ? r.a.createElement("div", {
                                className: "white-box"
                            }, r.a.createElement("div", {
                                className: "media"
                            }, r.a.createElement("div", {
                                className: "media-left media-middle"
                            }, r.a.createElement("img", {
                                className: "media-object product-thumb",
                                src: this.state.book.cover,
                                alt: "".concat(this.state.book.name, " covers")
                            })), r.a.createElement("div", {
                                className: "media-body"
                            }, r.a.createElement("h3", {
                                className: "media-heading"
                            }, this.state.book.name, r.a.createElement("div", {
                                className: "pull-right margin-1"
                            }, r.a.createElement("small", null, "".concat(this.props.order.quantity, " @ ").concat(this.state.book.price)))), r.a.createElement("small", null, this.state.book.category), r.a.createElement(xe, {
                                bookId: this.props.order.bookId
                            }), r.a.createElement("div", null, "", r.a.createElement(pe, {
                                bookId: this.state.book.id,
                                price: this.state.book.price,
                                variant: "buyAgain"
                            })), r.a.createElement(de, {
                                stars: this.state.book.rating5
                            })))) : r.a.createElement("div", {
                                className: "white-box"
                            }, r.a.createElement("div", {
                                className: "media"
                            }, r.a.createElement("div", {
                                className: "media-left media-middle"
                            }, r.a.createElement("div", {
                                className: "loader-no-margin"
                            }))))
                        }
                    }]), a
                }(r.a.Component),
                it = function(e) {
                    Object(p.a)(a, e);
                    var t = Object(h.a)(a);

                    function a(e) {
                        var n;
                        return Object(m.a)(this, a), (n = t.call(this, e)).getPrettyDate = function(e) {
                            var t = new Date(e);
                            return "".concat(t.getMonth(), "/").concat(t.getDate(), "/").concat(t.getFullYear(), " ").concat(t.getHours(), ":").concat(t.getMinutes() < 10 ? "0" : "").concat(t.getMinutes())
                        }, n.state = {
                            userInfo: null,
                            isLoading: !0,
                            orders: []
                        }, n
                    }
                    return Object(d.a)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = Object(u.a)(l.a.mark((function e() {
                                var t, a;
                                return l.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, g.b.currentUserInfo();
                                        case 2:
                                            return t = e.sent, this.setState({
                                                userInfo: t
                                            }), e.prev = 4, e.next = 7, this.listOrders();
                                        case 7:
                                            a = e.sent, this.setState({
                                                orders: a,
                                                isLoading: !1
                                            }), e.next = 14;
                                            break;
                                        case 11:
                                            e.prev = 11, e.t0 = e.catch(4), alert(e.t0);
                                        case 14:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [4, 11]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "listOrders",
                        value: function() {
                            return g.a.get("orders", "/orders", null)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this;
                            return r.a.createElement("div", {
                                className: "Category"
                            }, r.a.createElement(D, null), r.a.createElement(y, null), r.a.createElement("div", {
                                className: "well-bs col-md-12"
                            }, this.state.userInfo && r.a.createElement("div", {
                                className: "white-box no-margin-top"
                            }, r.a.createElement("h3", null, "Hello ".concat(this.state.userInfo.attributes.email, "!"))), r.a.createElement("div", {
                                className: "white-box"
                            }, r.a.createElement("h3", null, "Past purchases")), !this.state.isLoading && this.state.orders && this.state.orders.sort((function(e, t) {
                                return t.orderDate - e.orderDate
                            })).map((function(t) {
                                return r.a.createElement("div", {
                                    className: "order-date",
                                    key: t.orderId
                                }, r.a.createElement("h4", null, "Order date: ".concat(e.getPrettyDate(t.orderDate))), t.books.map((function(e) {
                                    return r.a.createElement(st, {
                                        order: e,
                                        key: e.bookId
                                    })
                                })))
                            })),))
                        }
                    }]), a
                }(n.Component),
                lt = function(e) {
                    Object(p.a)(a, e);
                    var t = Object(h.a)(a);

                    function a(e) {
                        var n;
                        return Object(m.a)(this, a), (n = t.call(this, e)).state = {
                            book: void 0
                        }, n
                    }
                    return Object(d.a)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = Object(u.a)(l.a.mark((function e() {
                                var t;
                                return l.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, this.getBook();
                                        case 3:
                                            t = e.sent, this.setState({
                                                book: t
                                            }), e.next = 10;
                                            break;
                                        case 7:
                                            e.prev = 7, e.t0 = e.catch(0), alert(e.t0);
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [0, 7]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "getBook",
                        value: function() {
                            return g.a.get("books", "/books/".concat(this.props.bookId), null)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return this.state.book ? r.a.createElement("div", {
                                className: "white-box"
                            }, r.a.createElement("div", {
                                className: "media"
                            }, r.a.createElement("div", {
                                className: "media-left media-middle no-padding"
                            }, r.a.createElement("img", {
                                className: "media-object product-thumb",
                                src: this.state.book.cover,
                                alt: "".concat(this.state.book.name, " cover")
                            })), r.a.createElement("div", {
                                className: "media-body product-padding padding-20"
                            }, r.a.createElement("h3", {
                                className: "media-heading"
                            }, this.state.book.name, r.a.createElement("small", {
                                className: "pull-right margin-1"
                            }, r.a.createElement("h4", null, "€", this.state.book.price))), r.a.createElement("p", null, r.a.createElement("small", null, this.state.book.category)), r.a.createElement(xe, {
                                bookId: this.props.bookId
                            }), r.a.createElement("div", null, "", r.a.createElement(pe, {
                                bookId: this.props.bookId,
                                price: this.state.book.price
                            })),))) : null
                        }
                    }]), a
                }(r.a.Component),
                ut = function(e) {
                    Object(p.a)(a, e);
                    var t = Object(h.a)(a);

                    function a(e) {
                        var n;
                        return Object(m.a)(this, a), (n = t.call(this, e)).state = {
                            isLoading: !0,
                            books: []
                        }, n
                    }
                    return Object(d.a)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = Object(u.a)(l.a.mark((function e() {
                                var t, a, n, r;
                                return l.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, t = [], e.next = 4, g.a.get("bestsellers", "/bestsellers", null);
                                        case 4:
                                            for (a = e.sent, n = 0; n < a.length; n++) r = JSON.parse(a[n]), t.push({
                                                bookId: r
                                            });
                                            this.setState({
                                                books: t,
                                                isLoading: !1
                                            }), e.next = 12;
                                            break;
                                        case 9:
                                            e.prev = 9, e.t0 = e.catch(0), alert(e.t0);
                                        case 12:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [0, 9]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "render",
                        value: function() {
                            return r.a.createElement("div", {
                                className: "Category"
                            }, r.a.createElement(D, null), r.a.createElement(y, null), r.a.createElement("div", null, r.a.createElement("div", {
                                className: "well-bs no-radius"
                            }, r.a.createElement("div", {
                                className: "container-category"
                            }, r.a.createElement("h3", null, "Top 10 best sellers")), this.state.isLoading ? r.a.createElement("div", {
                                className: "loader"
                            }) : this.state.books.slice(0, 20).map((function(e) {
                                return r.a.createElement(lt, {
                                    bookId: e.bookId,
                                    key: e.bookId
                                })
                            })))))
                        }
                    }]), a
                }(r.a.Component),
                mt = function(e) {
                    Object(p.a)(a, e);
                    var t = Object(h.a)(a);

                    function a(e) {
                        var n;
                        return Object(m.a)(this, a), (n = t.call(this, e)).state = {
                            isLoading: !0,
                            books: []
                        }, n
                    }
                    return Object(d.a)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = Object(u.a)(l.a.mark((function e() {
                                var t, a, n, r;
                                return l.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, this.searchBooks();
                                        case 3:
                                            for (t = e.sent, a = [], n = 0; n < t.hits.total; n++)(r = t.hits.hits[n] && t.hits.hits[n]._source) && a.push({
                                                author: r.author.S,
                                                category: r.category.S,
                                                cover: r.cover.S,
                                                id: r.id.S,
                                                name: r.name.S,
                                                price: r.price.N
                                            });
                                            this.setState({
                                                books: a
                                            }), e.next = 12;
                                            break;
                                        case 9:
                                            e.prev = 9, e.t0 = e.catch(0), alert(e.t0);
                                        case 12:
                                            this.setState({
                                                isLoading: !1
                                            });
                                        case 13:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [0, 9]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "searchBooks",
                        value: function() {
                            return g.a.get("search", "/search?q=".concat(this.props.match.params.id), null)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return this.state.isLoading ? r.a.createElement("div", {
                                className: "loader"
                            }) : r.a.createElement("div", null, r.a.createElement("div", {
                                className: "well-bs no-radius"
                            }, r.a.createElement("div", {
                                className: "container-category"
                            }, r.a.createElement("h3", null, "Search results"), r.a.createElement("div", {
                                className: "row"
                            }, this.state.books.map((function(e) {
                                return r.a.createElement(he, {
                                    book: e,
                                    key: e.id
                                })
                            }))))))
                        }
                    }]), a
                }(r.a.Component),
                dt = function(e) {
                    Object(p.a)(a, e);
                    var t = Object(h.a)(a);

                    function a() {
                        return Object(m.a)(this, a), t.apply(this, arguments)
                    }
                    return Object(d.a)(a, [{
                        key: "render",
                        value: function() {
                            return r.a.createElement("div", {
                                className: "Category"
                            }, r.a.createElement(D, null), r.a.createElement(y, null), r.a.createElement(mt, {
                                match: this.props.match
                            }))
                        }
                    }]), a
                }(n.Component),
                pt = a(205),
                ht = a(79),
                gt = function(e) {
                    var t = e.component,
                        a = e.props,
                        n = Object(pt.a)(e, ["component", "props"]);
                    return r.a.createElement(ht.a, Object.assign({}, n, {
                        render: function(e) {
                            return r.a.createElement(t, Object.assign({}, e, a))
                        }
                    }))
                },
                Et = function(e) {
                    return r.a.createElement(w.a, null, r.a.createElement(gt, {
                        path: "/",
                        exact: !0,
                        component: ze,
                        props: e
                    }), r.a.createElement(gt, {
                        path: "/login",
                        exact: !0,
                        component: Te,
                        props: e
                    }), r.a.createElement(gt, {
                        path: "/signup",
                        exact: !0,
                        component: He,
                        props: e
                    }), r.a.createElement(C.a, {
                        path: "/best",
                        exact: !0,
                        component: ut
                    }), r.a.createElement(C.a, {
                        path: "/cart",
                        exact: !0,
                        component: ot
                    }), r.a.createElement(C.a, {
                        path: "/category/:id",
                        exact: !0,
                        component: rt
                    }), r.a.createElement(C.a, {
                        path: "/past",
                        exact: !0,
                        component: it
                    }), r.a.createElement(C.a, {
                        path: "/checkout",
                        exact: !0,
                        component: W
                    }), r.a.createElement(C.a, {
                        path: "/checkout-confirm",
                        exact: !0,
                        component: P
                    }), r.a.createElement(C.a, {
                        path: "/search/:id",
                        exact: !0,
                        component: dt
                    }), r.a.createElement(C.a, {
                        component: Ye
                    }))
                },
                At = function(e) {
                    Object(p.a)(a, e);
                    var t = Object(h.a)(a);

                    function a(e) {
                        var c;
                        return Object(m.a)(this, a), (c = t.call(this, e)).userHasAuthenticated = function(e) {
                            c.setState({
                                isAuthenticated: e
                            })
                        }, c.handleLogout = Object(u.a)(l.a.mark((function e() {
                            return l.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, g.b.signOut();
                                    case 2:
                                        c.userHasAuthenticated(!1), c.props.history.push("/login");
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), c.showLoggedInBar = function() {
                            return r.a.createElement(n.Fragment, null, r.a.createElement(E.LinkContainer, {
                                to: "/past"
                            }, r.a.createElement(b.a, null, r.a.createElement("span", {
                                className: "orange line-height-24"
                            }, "My account"))), r.a.createElement(E.LinkContainer, {
                                to: "http://support.octank.ab3.live/"
                            }, r.a.createElement(b.a, null, r.a.createElement("span", {
                                className: "orange line-height-24"
                            }, "Support"))), r.a.createElement(E.LinkContainer, {
                                to: "http://dashboard.octank.ab3.live/"
                            }, r.a.createElement(b.a, null, r.a.createElement("span", {
                                className: "orange line-height-24"
                            }, "Dashboard"))), r.a.createElement(E.LinkContainer, {
                                to: "/best"
                            }, r.a.createElement(b.a, null, r.a.createElement("span", {
                                className: "orange line-height-24"
                            }, "Best sellers"))), r.a.createElement(b.a, {
                                onClick: c.handleLogout
                            }, r.a.createElement("span", {
                                className: "orange line-height-24"
                            }, "Log out")), r.a.createElement(E.LinkContainer, {
                                to: "/cart"
                            }, r.a.createElement(b.a, null, r.a.createElement("div", {
                                className: "shopping-icon-container"
                            }, r.a.createElement("span", {
                                className: "glyphicon glyphicon-shopping-cart white",
                                "aria-hidden": "true"
                            })))))
                        }, c.showLoggedOutBar = function() {
                            return r.a.createElement(n.Fragment, null, r.a.createElement(E.LinkContainer, {
                                to: "/signup"
                            }, r.a.createElement(b.a, null, r.a.createElement("span", {
                                className: "orange"
                            }, "Sign up"))), r.a.createElement(E.LinkContainer, {
                                to: "/login"
                            }, r.a.createElement(b.a, null, r.a.createElement("span", {
                                className: "orange"
                            }, "Log in"))))
                        }, c.state = {
                            isAuthenticated: !1,
                            isAuthenticating: !0
                        }, document.title = "AB3 Demo", c
                    }
                    return Object(d.a)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = Object(u.a)(l.a.mark((function e() {
                                return l.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, g.b.currentSession();
                                        case 3:
                                            if (!e.sent) {
                                                e.next = 5;
                                                break
                                            }
                                            this.userHasAuthenticated(!0);
                                        case 5:
                                            e.next = 10;
                                            break;
                                        case 7:
                                            e.prev = 7, e.t0 = e.catch(0), "No current user" !== e.t0 && alert(e.t0);
                                        case 10:
                                            this.setState({
                                                isAuthenticating: !1
                                            });
                                        case 11:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [0, 7]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "render",
                        value: function() {
                            var e = {
                                isAuthenticated: this.state.isAuthenticated,
                                userHasAuthenticated: this.userHasAuthenticated
                            };
                            return !this.state.isAuthenticating && r.a.createElement("div", {
                                className: "App container"
                            }, r.a.createElement(f.a, {
                                fluid: !0,
                                collapseOnSelect: !0
                            }, r.a.createElement(f.a.Header, null, r.a.createElement(f.a.Brand, null, r.a.createElement(A.a, {
                                to: "/"
                            }, r.a.createElement("span", {
                                className: "orange"
                            }, " ", r.a.createElement("img", {
                                src: "",
                                alt: ""
                            }), " OcTank Store Europe"))), r.a.createElement(f.a.Toggle, null)), r.a.createElement(f.a.Collapse, null, r.a.createElement(k.a, {
                                pullRight: !0
                            }, this.state.isAuthenticated ? this.showLoggedInBar() : this.showLoggedOutBar()))), r.a.createElement(Et, {
                                isAuthenticated: e.isAuthenticated,
                                userHasAuthenticated: e.userHasAuthenticated
                            }))
                        }
                    }]), a
                }(n.Component),
                vt = Object(v.a)(At),
                bt = Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));

            function ft(e) {
                navigator.serviceWorker.register(e).then((function(e) {
                    e.onupdatefound = function() {
                        var t = e.installing;
                        t && (t.onstatechange = function() {
                            "installed" === t.state && (navigator.serviceWorker.controller ? console.log("New content is available; please refresh.") : console.log("Content is cached for offline use."))
                        })
                    }
                })).catch((function(e) {
                    console.error("Error during service worker registration:", e)
                }))
            }
            var kt = {
                    REGION: "eu-central-1",
                    API_URL: "https://qfmyfaaopa.execute-api.eu-central-1.amazonaws.com/prod"
                },
                wt = {
                    REGION: "eu-central-1",
                    USER_POOL_ID: "eu-central-1_H1Iq2wAum",
                    APP_CLIENT_ID: "5diuhjb69vcsa2dr6e5m89vgjt",
                    IDENTITY_POOL_ID: "eu-central-1:5d8d4a08-653f-4d48-b077-4076786c3396"
                };
            a(668), a(669);
            g.c.configure({
                    Auth: {
                        mandatorySignIn: !0,
                        region: wt.REGION,
                        userPoolId: wt.USER_POOL_ID,
                        identityPoolId: wt.IDENTITY_POOL_ID,
                        userPoolWebClientId: wt.APP_CLIENT_ID
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
                }), o.a.render(r.a.createElement(s.a, null, r.a.createElement(vt, null)), document.getElementById("root")),
                function() {
                    if ("serviceWorker" in navigator) {
                        if (new URL("", window.location.toString()).origin !== window.location.origin) return;
                        window.addEventListener("load", (function() {
                            var e = "".concat("", "/service-worker.js");
                            bt ? (! function(e) {
                                fetch(e).then((function(t) {
                                    404 === t.status || -1 === t.headers.get("content-type").indexOf("javascript") ? navigator.serviceWorker.ready.then((function(e) {
                                        e.unregister().then((function() {
                                            window.location.reload()
                                        }))
                                    })) : ft(e)
                                })).catch((function() {
                                    console.log("No internet connection found. App is running in offline mode.")
                                }))
                            }(e), navigator.serviceWorker.ready.then((function() {
                                console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")
                            }))) : ft(e)
                        }))
                    }
                }()
        },
        69: function(e, t, a) {},
        70: function(e, t, a) {},
        81: function(e, t, a) {
            e.exports = a.p + "static/media/yourshoppingcart.39c06f61.png"
        },
        88: function(e, t) {}
    },
    [
        [207, 1, 2]
    ]
]);
//# sourceMappingURL=main.b4ce9542.chunk.js.map