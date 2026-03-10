import type { ProviderRegistration } from '@web-templates/contracts';
import { RadixButton } from './components/RadixButton';
import { RadixInput } from './components/RadixInput';
import { RadixCheckbox } from './components/RadixCheckbox';
import { RadixSwitch } from './components/RadixSwitch';
import { RadixSelect } from './components/RadixSelect';
import { RadixTabs } from './components/RadixTabs';
import { RadixDialog } from './components/RadixDialog';
import { RadixTooltip } from './components/RadixTooltip';
import { RadixAccordion } from './components/RadixAccordion';
import { buttonCodeTemplate } from './code-templates/button.template';
import { inputCodeTemplate } from './code-templates/input.template';
import { checkboxCodeTemplate } from './code-templates/checkbox.template';
import { switchCodeTemplate } from './code-templates/switch.template';
import { selectCodeTemplate } from './code-templates/select.template';
import { tabsCodeTemplate } from './code-templates/tabs.template';
import { dialogCodeTemplate } from './code-templates/dialog.template';
import { tooltipCodeTemplate } from './code-templates/tooltip.template';
import { accordionCodeTemplate } from './code-templates/accordion.template';

export const radixRegistration: ProviderRegistration = {
  provider: 'radix',
  implementations: {
    button: { component: RadixButton, codeTemplate: buttonCodeTemplate },
    input: { component: RadixInput, codeTemplate: inputCodeTemplate },
    checkbox: { component: RadixCheckbox, codeTemplate: checkboxCodeTemplate },
    switch: { component: RadixSwitch, codeTemplate: switchCodeTemplate },
    select: { component: RadixSelect, codeTemplate: selectCodeTemplate },
    tabs: { component: RadixTabs, codeTemplate: tabsCodeTemplate },
    dialog: { component: RadixDialog, codeTemplate: dialogCodeTemplate },
    tooltip: { component: RadixTooltip, codeTemplate: tooltipCodeTemplate },
    accordion: {
      component: RadixAccordion,
      codeTemplate: accordionCodeTemplate,
    },
  },
};
