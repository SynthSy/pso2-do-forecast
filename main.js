(function () {
    'use strict';

    var ORDER_DATA = [
        ['Forest Exploration (Featured Quest)', '2016-08-27', [16]],
        ['Caves Exploration (Featured Quest)', '2016-08-28', [16]],
        ['Desert Exploration (Featured Quest)', '2016-08-29', [16]],
        ['Tundra Exploration (Featured Quest)', '2016-08-30', [16]],
        ['Tunnels Exploration (Featured Quest)', '2016-08-31', [16]],
        ['Skyscape Exploration (Featured Quest)', '2016-09-01', [16]],
        ['Ruins Exploration (Featured Quest)', '2016-09-02', [16]],
        ['Sanctum Exploration (Featured Quest)', '2016-09-03', [16]],
        ['Coast Exploration (Featured Quest)', '2016-09-04', [16]],
        ['Quarry Exploration (Featured Quest)', '2016-09-05', [16]],
        ['Seabed Exploration (Featured Quest)', '2016-09-06', [16]],
        ['Shironia Exploration (Featured Quest)', '2016-09-07', [16]],
        ['Facility Exploration (Featured Quest)', '2016-09-08', [16]],
        ['Kuron Exploration (Featured Quest)', '2016-09-09', [16]],
        ['Tokyo Exploration (Featured Quest)', '2016-08-25', [16]],
        ['Las Vegas Exploration (Featured Quest)', '2016-08-26', [16]],
        ['Nab Rappy Capture (Featured Quest)', '2016-04-21', [21]],
        ['Wolgahda Extermination (Featured Quest)', '2016-04-21', [21]],
        ['Dragon Suppression: Skyscape (Featured Quest)', '2016-04-22', [21]],
        ['Kuronite Suppression: Shironia (Featured Quest)', '2016-04-22', [21]],
        ['Subdue Caterdra\'nsa (Featured Quest)', '2016-04-23', [21]],
        ['Facility Survey (Featured Quest)', '2016-04-23', [21]],
        ['ARKS Search: Tundra (Featured Quest)', '2016-04-24', [21]],
        ['Subdue Sol Dirandal (Featured Quest)', '2016-04-24', [21]],
        ['Ruins Infestation Survey(Featured Quest)', '2016-04-25', [21]],
        ['Vopar Rescue Team (Featured Quest)', '2016-04-25', [21]],,
        ['Subdue Goronzoran (Featured Quest)', '2016-04-26', [21]],
        ['Phantom Repulsion: Tokyo (Featured Quest)', '2016-04-26', [21]],
        ['Mech Power Survey: Tunnels (Featured Quest)', '2016-04-27', [21]],
        ['Anjhadu-lili Demolition (Featured Quest)', '2016-04-27', [21]],
        ['Distress Signal Investigation (Featured Quest)', '2016-04-28', [21]],
        ['Subdue Org Blan (Featured Quest)', '2016-04-28', [21]],
        ['Rare Ore Mining (Featured Quest)', '2016-04-29', [21]],
        ['Mobile Fortress Destruction (Featured Quest)', '2016-04-29', [21]],
        ['Subdue Decol Malluda (Featured Quest)', '2016-04-30', [21]],
        ['Kuronite Investigation (Featured Quest)', '2016-04-30', [21]],
        ['Tundra Regional Survey (Featured Quest)', '2016-05-01', [21]],
        ['Subdue Rheo Madullard (Featured Quest)', '2016-05-01', [21]],
        ['Cargo Recovery: Desert (Featured Quest)', '2016-05-02', [21]],
        ['Codotta Idetta Subjugation (Featured Quest)', '2016-05-02', [21]],
        ['Dagan Extermination: Forest (Featured Quest)', '2016-05-03', [21]],
        ['Train Ghidoran Suppression (Featured Quest)', '2016-05-03', [21]],
        ['Kartargot Extermination (Featured Quest)', '2016-05-04', [21]],
        ['Mech Power Survey: Desert (Featured Quest)', '2016-05-04', [21]],
        ['Subdue Za Oodan (Featured Quest)', '2016-05-05', [21]],
        ['Sanctum Suppression (Featured Quest)', '2016-05-05', [21]],
        ['Subdue Caterdra\'n (Featured Quest)', '2016-05-06', [21]],
        ['Lillipan Settlement Defense (Featured Quest)', '2016-05-06', [21]],
        ['Sample Collection: Skyscape (Featured Quest)', '2016-05-07', [21]],
        ['Coastal Conservation (Featured Quest)', '2016-05-07', [21]],
        ['Subdue Fangulf (Featured Quest)', '2016-05-08', [21]],
        ['Subdue De Malmoth (Featured Quest)', '2016-05-08', [21]],
        ['Dragonkin Ecological Survey (Featured Quest)', '2016-05-09', [21]],
        ['Mech Power Survey:Quarry (Featured Quest)', '2016-05-09', [21]],
        ['Polluter Destruction  (Featured Quest)', '2016-05-10', [21]],
        ['Coastal Ecological Survey (Featured Quest)', '2016-05-10', [21]],
        ['Transformer Takedown (Featured Quest)', '2016-05-11', [21]],
        ['Seabed Ecological Survey (Featured Quest)', '2016-05-11', [21]],

        ['Nab Rappy Capture (N)', '2016-09-07', [12, 60, 12, 9]],
        ['Run: Kartargot Extermination (N)', '2017-08-05', [22, 15, 20, 9, 13, 14]],
        ['Caterdra\'nsa', '2017-08-13', [54, 39]],
        ['Cargo Recovery: Desert (N)', '2016-05-01', [21, 17, 19, 12, 24]],
        ['Anjhadu-lili Demolition (N)', '2016-03-11', [23, 12, 21, 24, 13]],
        ['Subdue Rheo Madullard (N)', '2016-04-19', [26, 27, 4, 21, 15]],
        ['Rheo Madullard (N)', '2016-07-01', [16, 77]],
        ['Gigur Gunne-gam (N)', '2016-01-30', [64, 29]],
        ['Nepto Cassadora (N)', '2016-02-09', [44, 49]],
        ['Type-15 Tank (N)', '2016-02-20', [12, 12, 69]],
        ['Train Ghidoran (N)', '2016-03-27', [12, 12, 69]],
        ['Shironia Exploration (N)', '2016-02-01', [3, 24, 24, 20, 4, 8, 10]],
        ['Facility Exploration (N)', '2016-04-22', [21, 5, 7, 26, 10, 12, 12]],
        ['Tokyo Exploration(N)', '2016-01-31', [7, 2, 12, 12, 4, 8, 4, 8, 4, 8, 4, 8, 4, 3, 5]],
        ['Marathon Training: Naberius Advanced (N)', '2016-05-09', [36, 36, 21]],
        ['Marathon Training: Amduscia (N)', '2016-05-27', [6, 36, 51]],
        ['Marathon Training: Lillipa (N)', '2016-04-30', [21, 36, 36]],

        ['Rockbear (H)', '2016-09-21', [37, 56]],
        ['Subdue Caterdra\'n (H)', '2017-06-04', [27, 7, 27, 21, 11]],
        ['Distress Signal Investigation (H)', '2016-02-08', [20, 7, 20, 7, 39]],
        ['Transformer Takedown (H)', '2016-07-31', [9, 24, 9, 15, 12, 24]],
        ['Subdue Caterdra\'nsa (H)', '2016-09-10', [7, 20, 7, 14, 15, 30]],
        ['Kuron Exploration (H)', '2016-02-13', [9, 11, 30, 16, 20, 7]],
        ['Mobile Fortress Destruction (H)', '2016-04-13', [7, 11, 18, 7, 18, 32]],
		['Defeat: Codotta Idetta (H)', '2016-09-29', [20, 7, 27, 9, 23, 7]],
        ['Codotta Idetta (H)', '2016-08-04', [58, 35]],
        ['Guar Zigmorde (H)', '2016-08-28', [51, 42]],
        ['Devil’s Trailer (H)', '2016-09-09', [58, 35]],
        ['Vegas Illusia (H)', '2016-09-18', [39, 54]],
		['Subdue Org Blan (H)', '2016-08-15', [9, 11, 30, 16, 20, 7]],
        ['Las Vegas Exploration(H)', '2016-09-01', [4, 11, 24, 12, 16, 12, 5, 9]],
        ['Marathon Training: Naberius Beginner (H)', '2016-05-13', [60, 33]],
        ['Marathon Training: Naberius Advanced (H)', '2016-03-05', [60, 33]],
        ['Marathon Training: Amdusica (H)', '2016-05-02', [59, 34]],
        ['Marathon Training: Lillipa(H)', '2016-04-22', [79, 14]],
        ['Sanctum Infiltration (H)', '2016-05-25', [24, 69]],

        ['De Malmoth (VH)', '2016-04-07', [93]],
        ['Zeshrayda (VH)', '2016-03-18', [93]],
        ['Goronzoran (VH)', '2016-08-09', [48, 45]],
        ['Dragon Ex (VH)', '2016-09-10', [18, 18, 57]],
        ['Cave Exploration (VH)', '2016-05-09', [5, 46, 3, 39]],
        ['ARKS Search: Tundra (VH)', '2016-05-06', [6, 54, 14, 19]],
        ['Skyscape Exploration (VH)', '2016-02-12', [5, 49, 14, 25]],
        ['Polluter Destruction (VH)', '2016-02-15', [5, 49, 14, 25]],
        ['Ruins Exploration (VH)', '2016-02-21', [2, 49, 18, 24]],
        ['Sanctum Suppression (VH)', '2016-06-16', [12, 42, 28, 11]],
        ['Sanctum Exploration (VH)', '2016-09-09', [11, 6, 48, 28]],
        ['Org Blan (VH)', '2016-02-17', [48, 23, 22]],
        ['Bal Rodos (VH)', '2016-01-30', [3, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]],
        ['Vardha Soma (VH)', '2017-09-02', [18, 37, 38]],
        ['Decol Malluda (VH)', '2016-02-13', [63, 13, 17]],
        ['Type-15 Tank (VH)', '2016-02-10', [18, 18, 18, 18, 21]],
        ['Devil’s Trailer (VH)', '2017-08-07', [8, 31, 54]],
        ['Coastal Ecological Survey (VH)', '2016-02-24', [51, 14, 22, 6]],
        ['Coast Exploration (VH)', '2016-01-30', [28, 2, 42, 7, 14]],
        ['Mech Power Survey: Quarry (VH)', '2016-07-10', [13, 44, 7, 29]],
        ['Quarry Exploration(VH)', '2016-07-07', [19, 44, 19, 11]],
        ['Seabed Ecological Survey (VH)', '2016-03-13', [9, 36, 36, 12]],
        ['Seabed Exploration (VH)', '2016-01-31', [41, 4, 14, 34]],
        ['Marathon Training: Naberius Advanced (VH)', '2016-05-29', [22, 14, 57]],
        ['Marathon Training: Amduscia (VH)', '2016-04-26', [21, 36, 36]],
        ['Marathon Training: Lillipa (VH)', '2016-05-05', [36,36, 21]],

        ['Rockbear (SH)', '2017-07-08', [49, 44]],
        ['Vol Dragon (SH)', '2016-04-03', [26, 67]],
        ['Gwanahda (SH)', '2016-08-18', [27, 66]],
        ['Snow Banther (SH)', '2016-02-18', [54, 39]],
        ['Big Vardha (SH)', '2016-02-23', [54, 39]],
        ['Quartz Dragon (SH)', '2016-02-27', [54, 39]],
        ['Zeshrayda (SH)', '2016-03-03', [54, 39]],
        ['Dragon Ex (SH)', '2017-09-16', [54, 39]],
        ['Bal Rodos (SH)', '2016-08-06', [93]],
        ['Blu Ringahda (SH)', '2016-02-06', [39, 54]],
        ['Biol Meduna (SH)', '2016-03-04', [17, 76]],
        ['Train Ghidoran (SH)', '2017-08-01', [64, 29]],
        ['Vegas Illusia (SH)', '2016-09-11', [30, 22, 8, 33]],
        ['Forest Exploration (SH)', '2014-09-27', [6, 3, 24, 27, 33]],
        ['Caves Exploration (SH)', '2014-08-28', [48, 33, 3, 3, 6]],
        ['Desert Exploration (SH)', '2014-09-03', [3, 3, 15, 15, 57]],
        ['Tundra Exploration (SH)', '2014-08-31', [12, 6, 30, 15, 6, 24]],
        ['Tunnels Exploration (SH)', '2014-09-21', [21, 9, 6, 18, 39]],
        ['Skyscape Exploration (SH)', '2014-09-15', [15, 24, 12, 6, 36]],
        ['Ruins Exploration (SH)', '2016-01-31', [15, 15, 24, 18, 21]],
        ['Sanctum Exploration (SH)', '2016-03-04', [15, 9, 3, 21, 45]],
        ['Coast Exploration (SH)', '2016-01-28', [12, 3, 6, 9, 18, 45]],
        ['Quarry Exploration (SH)', '2016-02-21', [15, 33, 6, 3, 36]],
        ['Subdue Decol Malluda (SH)', '2016-02-24', [15, 24, 21, 3, 30]],
        ['Seabed Exploration (SH)', '2016-02-03', [3, 36, 9, 15, 30]]
    ];

    var CycleIter = (function () {
        var klass = function (seq) {
            this._seq = [].concat(seq);
            this._idx = 0;
            return this;
        };

        klass.prototype = {
            next: function () {
                var seq = this._seq,
                    idx = this._idx,
                    ret = seq[idx];
                this._idx = ++idx < seq.length ? idx : 0;
                return ret;
            }
        };

        return klass;
    }());

    var DateUtil = (function () {
        var _copy = function (date) {
            return new Date(date.valueOf());
        };

        var _trimTime = function (date) {
            date = _copy(date);
            date.setHours(0, 0, 0, 0);
            return date;
        };

        var _addDays = function (date, days) {
            date = _copy(date);
            date.setDate(date.getDate() + days);
            return date;
        };

        return {
            copy: _copy,
            trimTime: _trimTime,
            addDays: _addDays
        };
    }());

    var DateCalculator = (function () {
        var klass = function (start, freqs) {
            this._date = DateUtil.trimTime(start);
            this._freqs = new CycleIter(freqs);
            return this;
        };

        var _i2s = function (num, leng) {
            var num = num.toString(),
                digits = [num];
            for (var i = num.length; i < leng; ++i) {
                digits.unshift('0');
            }
            return digits.join('');
        };

        klass.prototype = {
            date: function () {return DateUtil.copy(this._date)},
            toDateString: function () {
                var date = this._date;
                return [_i2s(date.getFullYear(), 4),
                        _i2s(date.getMonth() + 1, 2),
                        _i2s(date.getDate(), 2)
                       ].join('-');
            },
            next: function () {
                this._date = DateUtil.addDays(this._date, this._freqs.next());
                return this;
            }
        };

        return klass;
    }());

    var OrderResults = (function () {
        var klass = function (begin, end) {
            var result = {};
            if (begin && end) {
                var dc = new DateCalculator(begin, [1]);
                for (; dc.date() < end; dc.next()) {
                    result[dc.toDateString()] = [];
                }
            }
            this._result = result;
            return this;
        };

        klass.prototype = {
            push: function (date, order) {
                var result = this._result,
                    orders = result[date];
                if (!orders) {
                    orders = [];
                    result[date] = orders;
                }
                orders.push(order);
                return this;
            },
            forEach: function (callback) {
                var result = this._result;
                Object.keys(result).sort().forEach(function (date) {
                    callback(date, result[date]);
                });
                return this;
            }
        };

        return klass;
    }());

    var TextConsole = (function () {
        var klass = function ($this) {
            this._$ = $this;
            return this;
        };

        klass.prototype = {
            clear: function () {this._$.text('')},
            print: function (s) {this._$.text(this._$.text() + s)},
            println: function (s) {this.print(s + '\n')}
        };

        return klass;
    }());

    var Forecast = (function () {
        var _FORECAST_DAYS = 10;

        var klass = function ($this) {
            var self = this;
            ['forward', 'backward'].forEach(function (name) {
                var $button = $this.find('.forecast-' + name),
                    handler = self['on' + _capitalize(name)];
                $button.click(function () {handler.call(self)});
                $button.focus(function () {$(this).blur()});
            });
            this._out = new TextConsole($this.find('.forecast-output'));
            this._base = DateUtil.trimTime(new Date());
            this._offset = 0;
            this.update();
            return this;
        };

        var _capitalize = function (s) {
            return s.replace(/\b[a-z]/g, function (s) {
                return s.toUpperCase();
            });
        };

        klass.prototype = {
            onForward: function () {this.next(_FORECAST_DAYS)},
            onBackward: function () {this.next(-_FORECAST_DAYS)},
            next: function (days) {
                this._offset += days;
                this.update();
            },
            update: function () {
                var begin = DateUtil.addDays(this._base, this._offset),
                    end = DateUtil.addDays(begin, _FORECAST_DAYS),
                    results = new OrderResults(begin, end);
                ORDER_DATA.forEach(function (data) {
                    var order = data[0],
                        dc = new DateCalculator(data[1], data[2]);
                    for (; dc.date() < begin; dc.next()) {
                    }
                    for (; dc.date() < end; dc.next()) {
                        results.push(dc.toDateString(), order);
                    }
                });
                var out = this._out;
                out.clear();
                results.forEach(function (date, orders) {
                    out.println(date + ':');
                    orders.forEach(function (order) {
                        out.println('  ' + order);
                    });
                });
            }
        };

        return klass;
    })();

    new Forecast($('#forecast'));
})();
