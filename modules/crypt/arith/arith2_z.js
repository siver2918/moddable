/*
 * Copyright (c) 2016-2017  Moddable Tech, Inc.
 *
 *   This file is part of the Moddable SDK Runtime.
 * 
 *   The Moddable SDK Runtime is free software: you can redistribute it and/or modify
 *   it under the terms of the GNU Lesser General Public License as published by
 *   the Free Software Foundation, either version 3 of the License, or
 *   (at your option) any later version.
 * 
 *   The Moddable SDK Runtime is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU Lesser General Public License for more details.
 * 
 *   You should have received a copy of the GNU Lesser General Public License
 *   along with the Moddable SDK Runtime.  If not, see <http://www.gnu.org/licenses/>.
 *
 * This file incorporates work covered by the following copyright and  
 * permission notice:  
 *
 *       Copyright (C) 2010-2016 Marvell International Ltd.
 *       Copyright (C) 2002-2010 Kinoma, Inc.
 *
 *       Licensed under the Apache License, Version 2.0 (the "License");
 *       you may not use this file except in compliance with the License.
 *       You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *       Unless required by applicable law or agreed to in writing, software
 *       distributed under the License is distributed on an "AS IS" BASIS,
 *       WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *       See the License for the specific language governing permissions and
 *       limitations under the License.
 */

import Integer from "arith2_int";

export default class Z {
	constructor() {
	};
	add(a, b) {
		return new Integer(a.value + b.value);
	}
	sub(a, b) {
		return new Integer(a.value - b.value);
	}
	mul(a, b) {
		return new Integer(a.value * b.value);
	}
	div2(a, b) {
		return {q: new Integer(a.value / b.value), r: new Integer(a.value % b.value)};
	}
	div(a, b) {
		return new Integer(a.value / b.value);
	}
	mod(a, b) {
		return new Integer(a.value % b.value);
	}
	square(a) {
		return new Integer(a.value * a.value);
	}
	xor(a, b) {
		return new Integer(a.value ^ b.value);
	}
	or(a, b) {
		return new Integer(a.value | b.value);
	}
	and(a, b) {
		return new Integer(a.value & b.value);
	}
	lsl(a, b) {
		return new Integer(a.value << b.value);
	}
	lsr(a, b) {
		return new Integer(a.value >>> b.value);
	}
	inc(a, d) {
		return new Integer(a.value + BigInt(d));
	};
	toString(i, radix) {
		return i.value.toString(radix);
	}
	toInteger(digits, radix) {
		return new Integer(BigInt(radix == 16 ? "0x" + digits : digits));
	}
};

Object.freeze(Z.prototype);
