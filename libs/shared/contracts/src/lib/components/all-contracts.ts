import type { ComponentContract } from '../component-registry.types';
import { buttonContract } from './button.contract';
import { inputContract } from './input.contract';
import { checkboxContract } from './checkbox.contract';
import { switchContract } from './switch.contract';
import { selectContract } from './select.contract';
import { tabsContract } from './tabs.contract';
import { dialogContract } from './dialog.contract';
import { tooltipContract } from './tooltip.contract';
import { accordionContract } from './accordion.contract';

export const ALL_CONTRACTS: ComponentContract[] = [
  buttonContract,
  inputContract,
  checkboxContract,
  switchContract,
  selectContract,
  tabsContract,
  dialogContract,
  tooltipContract,
  accordionContract,
];
