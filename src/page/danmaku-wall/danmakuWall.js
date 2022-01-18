(function ($) {
  /**
   * 或者区间内的随机整数
   * @param {number} min
   * @param {number} max
   */
  function random(min = 0, max = 100) {
    return Math.round(Math.random() * (max - min)) + min;
  }

  function randomColor () {
    return '#' + Math.floor(Math.random()*16777215).toString(16)
  }

  const DURATION = 6000

  function Danmaku(screen) {
    this.screen = screen;
    // 动画队列
    this.queue = [];
    // dom池
    this.pool = [];
  }

  /**
   * 复用dom
   * @returns
   */
  Danmaku.prototype._getSpan = function (text) {
    let span;
    if (this.pool.length > 0) {
      span = this.pool.shift();
    } else {
      span = $("<span class='danmaku'></span>");
      span.mouseenter(() => {
        span.stop()
      })
      span.mouseleave(() => {
        // 重新计算剩余时间
        this._send(span, this._getRemainTime(span))
      })
    }

    return span.text(text);
  };
  /**
   * 重新计算剩余时间
   * @param {jQuery} span 
   */
  Danmaku.prototype._getRemainTime = function (span) {
    const spanWidth = span.width()
    const screenWidth = this.screen.width() + spanWidth
    // 计算出弹幕速度
    const speed = screenWidth / DURATION
    const { left } = span.position()
    // 计算出剩余距离
    const remainDistance = left + spanWidth
    return remainDistance / speed

  }

  /**
   * 回收dom
   * @param {jQuery} span
   */
  Danmaku.prototype._recycleSpan = function (span) {
    this.pool.push(span);
  };

  /**
   * 弹幕发射前的处理
   * 生成随机位置及随机颜色
   * @param {jQuery} span
   */
  Danmaku.prototype._beforeSend = function (span) {
    this.queue.push(span);
    span.css({ opacity: 0, fontSize: random(14, 28) });
    this.screen.append(span);
    const color = randomColor();
    span.css({
      position: "absolute",
      fontWeight: 500,
      right: -span.width(),
      top: random(0, this.screen.height() - span.height()),
      opacity: 1,
      color
    });
  };

  Danmaku.prototype._afterSend = function (span) {
    this._recycleSpan(span.detach());
    this.queue = this.queue.filter((s) => s !== span);
    console.log("完成", this);
  };

  Danmaku.prototype._send = function (span, duration) {
    console.log("duration", duration);
    span.animate({ right: this.screen.width() }, duration, 'linear', () => {
      this._afterSend(span)
    });
  } 

  /**
   * 发送弹幕
   * @param {string} text
   */
  Danmaku.prototype.send = function (text = "") {
    if (!text) {
      throw new Error("输入文字不能为空");
    }
    const span = this._getSpan(text);
    this._beforeSend(span);
    this._send(span, DURATION)
    // span.animate({ right: this.screen.width() }, 6000, 'linear', () => {
    //   this._afterSend(span);
    // });
  };

  /**
   * 清空弹幕
   */
  Danmaku.prototype.clear = function () {
    if (this.queue.length > 0) {
      this.queue.forEach((span) => {
        span.finish();
      });
    }
  };

  $.fn.danmaku = function () {
    if (this.__DMK) {
      return this.__DMK;
    }
    this.__DMK = new Danmaku(this);
    return this.__DMK;
  };
})(jQuery);

const $ = window.$;

$(document).ready(function () {
  const input = $('input[type="text"]');
  const trigger = $(".control-panel button.primary");
  const cleaner = $(".control-panel button.clean");
  const screen = $(".screen").danmaku();

  trigger.on("click", function () {
    try {
      screen.send(input.val());
    } catch (e) {
      alert(e.message);
    }
  });
  cleaner.on("click", function () {
    screen.clear();
  });
});
