import './NavBar.svelte.css.proxy.js';
/* src/Components/NavBar.svelte generated by Svelte v3.41.0 */
import {
	SvelteComponent,
	append,
	attr,
	destroy_each,
	detach,
	element,
	empty,
	init,
	insert,
	listen,
	noop,
	run_all,
	safe_not_equal,
	set_data,
	space,
	text,
	toggle_class
} from "../../_snowpack/pkg/svelte/internal.js";

import { createEventDispatcher } from '../../_snowpack/pkg/svelte.js';

function get_each_context_1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[24] = list[i];
	return child_ctx;
}

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[21] = list[i];
	child_ctx[23] = i;
	return child_ctx;
}

// (124:34) 
function create_if_block_1(ctx) {
	let each_1_anchor;
	let each_value_1 = /*availableYears*/ ctx[6];
	let each_blocks = [];

	for (let i = 0; i < each_value_1.length; i += 1) {
		each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
	}

	return {
		c() {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
		},
		m(target, anchor) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert(target, each_1_anchor, anchor);
		},
		p(ctx, dirty) {
			if (dirty & /*availableYears, year, yearSelected*/ 1090) {
				each_value_1 = /*availableYears*/ ctx[6];
				let i;

				for (i = 0; i < each_value_1.length; i += 1) {
					const child_ctx = get_each_context_1(ctx, each_value_1, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block_1(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value_1.length;
			}
		},
		d(detaching) {
			destroy_each(each_blocks, detaching);
			if (detaching) detach(each_1_anchor);
		}
	};
}

// (113:4) {#if overviewState === 2}
function create_if_block(ctx) {
	let each_1_anchor;
	let each_value = /*availableMonths*/ ctx[5];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	return {
		c() {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
		},
		m(target, anchor) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert(target, each_1_anchor, anchor);
		},
		p(ctx, dirty) {
			if (dirty & /*month, availableMonths, monthSelected*/ 545) {
				each_value = /*availableMonths*/ ctx[5];
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		d(detaching) {
			destroy_each(each_blocks, detaching);
			if (detaching) detach(each_1_anchor);
		}
	};
}

// (125:6) {#each availableYears as yearDefinition}
function create_each_block_1(ctx) {
	let div;
	let span;
	let t0_value = /*yearDefinition*/ ctx[24].year + "";
	let t0;
	let t1;
	let mounted;
	let dispose;

	function click_handler_1(...args) {
		return /*click_handler_1*/ ctx[17](/*yearDefinition*/ ctx[24], ...args);
	}

	return {
		c() {
			div = element("div");
			span = element("span");
			t0 = text(t0_value);
			t1 = space();
			attr(span, "class", "svelte-kchm3p");
			attr(div, "class", "month-selector--month svelte-kchm3p");
			toggle_class(div, "selected", /*yearDefinition*/ ctx[24].year === /*year*/ ctx[1]);
			toggle_class(div, "selectable", /*yearDefinition*/ ctx[24].selectable);
		},
		m(target, anchor) {
			insert(target, div, anchor);
			append(div, span);
			append(span, t0);
			append(div, t1);

			if (!mounted) {
				dispose = listen(div, "click", click_handler_1);
				mounted = true;
			}
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;
			if (dirty & /*availableYears*/ 64 && t0_value !== (t0_value = /*yearDefinition*/ ctx[24].year + "")) set_data(t0, t0_value);

			if (dirty & /*availableYears, year*/ 66) {
				toggle_class(div, "selected", /*yearDefinition*/ ctx[24].year === /*year*/ ctx[1]);
			}

			if (dirty & /*availableYears*/ 64) {
				toggle_class(div, "selectable", /*yearDefinition*/ ctx[24].selectable);
			}
		},
		d(detaching) {
			if (detaching) detach(div);
			mounted = false;
			dispose();
		}
	};
}

// (114:6) {#each availableMonths as monthDefinition, index}
function create_each_block(ctx) {
	let div;
	let span;
	let t0_value = /*monthDefinition*/ ctx[21].abbrev + "";
	let t0;
	let t1;
	let mounted;
	let dispose;

	function click_handler(...args) {
		return /*click_handler*/ ctx[16](/*monthDefinition*/ ctx[21], /*index*/ ctx[23], ...args);
	}

	return {
		c() {
			div = element("div");
			span = element("span");
			t0 = text(t0_value);
			t1 = space();
			attr(span, "class", "svelte-kchm3p");
			attr(div, "class", "month-selector--month svelte-kchm3p");
			toggle_class(div, "selected", /*index*/ ctx[23] === /*month*/ ctx[0]);
			toggle_class(div, "selectable", /*monthDefinition*/ ctx[21].selectable);
		},
		m(target, anchor) {
			insert(target, div, anchor);
			append(div, span);
			append(span, t0);
			append(div, t1);

			if (!mounted) {
				dispose = listen(div, "click", click_handler);
				mounted = true;
			}
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;
			if (dirty & /*availableMonths*/ 32 && t0_value !== (t0_value = /*monthDefinition*/ ctx[21].abbrev + "")) set_data(t0, t0_value);

			if (dirty & /*month*/ 1) {
				toggle_class(div, "selected", /*index*/ ctx[23] === /*month*/ ctx[0]);
			}

			if (dirty & /*availableMonths*/ 32) {
				toggle_class(div, "selectable", /*monthDefinition*/ ctx[21].selectable);
			}
		},
		d(detaching) {
			if (detaching) detach(div);
			mounted = false;
			dispose();
		}
	};
}

function create_fragment(ctx) {
	let div5;
	let div3;
	let div0;
	let t0;
	let div1;
	let t1;
	let t2;
	let div2;
	let t3;
	let div4;
	let mounted;
	let dispose;

	function select_block_type(ctx, dirty) {
		if (/*overviewState*/ ctx[4] === 2) return create_if_block;
		if (/*overviewState*/ ctx[4] === 3) return create_if_block_1;
	}

	let current_block_type = select_block_type(ctx, -1);
	let if_block = current_block_type && current_block_type(ctx);

	return {
		c() {
			div5 = element("div");
			div3 = element("div");
			div0 = element("div");
			div0.innerHTML = `<i class="arrow left svelte-kchm3p"></i>`;
			t0 = space();
			div1 = element("div");
			t1 = text(/*heading_label*/ ctx[7]);
			t2 = space();
			div2 = element("div");
			div2.innerHTML = `<i class="arrow right svelte-kchm3p"></i>`;
			t3 = space();
			div4 = element("div");
			if (if_block) if_block.c();
			attr(div0, "class", "control svelte-kchm3p");
			toggle_class(div0, "enabled", /*canDecrementMonth*/ ctx[3]);
			attr(div1, "class", "label svelte-kchm3p");
			attr(div2, "class", "control svelte-kchm3p");
			toggle_class(div2, "enabled", /*canIncrementMonth*/ ctx[2]);
			attr(div3, "class", "heading-section svelte-kchm3p");
			attr(div4, "class", "month-selector svelte-kchm3p");
			toggle_class(div4, "open", /*overviewState*/ ctx[4] !== 1);
			attr(div5, "class", "title");
		},
		m(target, anchor) {
			insert(target, div5, anchor);
			append(div5, div3);
			append(div3, div0);
			append(div3, t0);
			append(div3, div1);
			append(div1, t1);
			append(div3, t2);
			append(div3, div2);
			append(div5, t3);
			append(div5, div4);
			if (if_block) if_block.m(div4, null);

			if (!mounted) {
				dispose = [
					listen(div0, "click", /*goBack*/ ctx[11]),
					listen(div1, "click", /*heading_label_click*/ ctx[8]),
					listen(div2, "click", /*goForward*/ ctx[12])
				];

				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (dirty & /*canDecrementMonth*/ 8) {
				toggle_class(div0, "enabled", /*canDecrementMonth*/ ctx[3]);
			}

			if (dirty & /*heading_label*/ 128) set_data(t1, /*heading_label*/ ctx[7]);

			if (dirty & /*canIncrementMonth*/ 4) {
				toggle_class(div2, "enabled", /*canIncrementMonth*/ ctx[2]);
			}

			if (current_block_type === (current_block_type = select_block_type(ctx, dirty)) && if_block) {
				if_block.p(ctx, dirty);
			} else {
				if (if_block) if_block.d(1);
				if_block = current_block_type && current_block_type(ctx);

				if (if_block) {
					if_block.c();
					if_block.m(div4, null);
				}
			}

			if (dirty & /*overviewState*/ 16) {
				toggle_class(div4, "open", /*overviewState*/ ctx[4] !== 1);
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(div5);

			if (if_block) {
				if_block.d();
			}

			mounted = false;
			run_all(dispose);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let heading_label;
	const dispatch = createEventDispatcher();
	let { month } = $$props;
	let { year } = $$props;
	let { start } = $$props;
	let { end } = $$props;
	let { canIncrementMonth } = $$props;
	let { canDecrementMonth } = $$props;
	let { monthsOfYear } = $$props;

	// overviewState: if we're looking at
	// month-view (1), year-view (2) or multi-year-view (3)
	let overviewState = 1;

	let availableMonths;
	let availableYears;

	function heading_label_click() {
		switch (overviewState) {
			case 1:
				$$invalidate(4, overviewState = 2);
				break;
			case 2:
				$$invalidate(4, overviewState = 3);
				break;
			case 3:
				$$invalidate(4, overviewState = 3);
				break;
		}
	}

	function monthSelected(event, { m, i }) {
		event.stopPropagation();
		if (!m.selectable) return;
		dispatch('monthSelected', i);
		$$invalidate(4, overviewState = 1);
	}

	function yearSelected(ev, year) {
		ev.stopPropagation();
		if (!year.selectable) return;
		dispatch('yearSelected', year.year);
		$$invalidate(4, overviewState = 2);
	}

	function _go(forward = true, overviewState) {
		// this formula makes true=1 and false=-1
		const sign = ~forward + +forward * 3;

		//const incr = sign * ((overviewState - 1) * 12);
		// TODO this is not correct
		const incr = sign * overviewState + sign * 12 ** (overviewState - 1);

		//console.log(incr);
		dispatch('incrementMonth', incr);
	}

	function goBack() {
		_go(false, overviewState);
	}

	function goForward() {
		_go(true, overviewState);
	}

	function determine_heading_label(overviewState) {
		if (overviewState === 1) {
			return `${monthsOfYear[month][0]} ${year}`;
		} else if (overviewState === 2) {
			return year;
		} else if (overviewState === 3) {
			const from = availableYears[0].year;
			const to = availableYears[availableYears.length - 1].year;
			return `${from} - ${to}`;
		}
	}

	const click_handler = (monthDefinition, index, e) => monthSelected(e, { m: monthDefinition, i: index });
	const click_handler_1 = (yearDefinition, e) => yearSelected(e, yearDefinition);

	$$self.$$set = $$props => {
		if ('month' in $$props) $$invalidate(0, month = $$props.month);
		if ('year' in $$props) $$invalidate(1, year = $$props.year);
		if ('start' in $$props) $$invalidate(13, start = $$props.start);
		if ('end' in $$props) $$invalidate(14, end = $$props.end);
		if ('canIncrementMonth' in $$props) $$invalidate(2, canIncrementMonth = $$props.canIncrementMonth);
		if ('canDecrementMonth' in $$props) $$invalidate(3, canDecrementMonth = $$props.canDecrementMonth);
		if ('monthsOfYear' in $$props) $$invalidate(15, monthsOfYear = $$props.monthsOfYear);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*start, year, end, monthsOfYear*/ 57346) {
			$: {
				let isOnLowerBoundary = start.getFullYear() === year;
				let isOnUpperBoundary = end.getFullYear() === year;

				$$invalidate(5, availableMonths = monthsOfYear.map((m, i) => ({
					name: m[0],
					abbrev: m[1],
					selectable: !isOnLowerBoundary && !isOnUpperBoundary || (!isOnLowerBoundary || i >= start.getMonth()) && (!isOnUpperBoundary || i <= end.getMonth())
				})));
			}
		}

		if ($$self.$$.dirty & /*year*/ 2) {
			$: {
				let baseYear = year - year % 12;

				$$invalidate(6, availableYears = Array(12).fill(baseYear).map((yr, i) => {
					return {
						year: yr + i,
						// TODO change: they should not all be selectable
						selectable: true
					};
				}));
			}
		}

		if ($$self.$$.dirty & /*overviewState, month, year*/ 19) {
			$: $$invalidate(7, heading_label = determine_heading_label(overviewState, month, year));
		}
	};

	return [
		month,
		year,
		canIncrementMonth,
		canDecrementMonth,
		overviewState,
		availableMonths,
		availableYears,
		heading_label,
		heading_label_click,
		monthSelected,
		yearSelected,
		goBack,
		goForward,
		start,
		end,
		monthsOfYear,
		click_handler,
		click_handler_1
	];
}

class NavBar extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			month: 0,
			year: 1,
			start: 13,
			end: 14,
			canIncrementMonth: 2,
			canDecrementMonth: 3,
			monthsOfYear: 15
		});
	}
}

export default NavBar;