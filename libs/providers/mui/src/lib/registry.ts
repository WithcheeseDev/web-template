import type { ProviderRegistration } from '@web-templates/contracts';
import { MuiButton } from './components/MuiButton';
import { MuiInput } from './components/MuiInput';
import { MuiCheckbox } from './components/MuiCheckbox';
import { MuiSwitch } from './components/MuiSwitch';
import { MuiSelect } from './components/MuiSelect';
import { MuiTabs } from './components/MuiTabs';
import { MuiDialog } from './components/MuiDialog';
import { MuiTooltip } from './components/MuiTooltip';
import { MuiAccordion } from './components/MuiAccordion';
import { buttonCodeTemplate } from './code-templates/button.template';
import { inputCodeTemplate } from './code-templates/input.template';
import { checkboxCodeTemplate } from './code-templates/checkbox.template';
import { switchCodeTemplate } from './code-templates/switch.template';
import { selectCodeTemplate } from './code-templates/select.template';
import { tabsCodeTemplate } from './code-templates/tabs.template';
import { dialogCodeTemplate } from './code-templates/dialog.template';
import { tooltipCodeTemplate } from './code-templates/tooltip.template';
import { accordionCodeTemplate } from './code-templates/accordion.template';

export const muiRegistration: ProviderRegistration = {
  provider: 'mui',
  implementations: {
    button: { component: MuiButton, codeTemplate: buttonCodeTemplate },
    input: { component: MuiInput, codeTemplate: inputCodeTemplate },
    checkbox: { component: MuiCheckbox, codeTemplate: checkboxCodeTemplate },
    switch: { component: MuiSwitch, codeTemplate: switchCodeTemplate },
    select: { component: MuiSelect, codeTemplate: selectCodeTemplate },
    tabs: { component: MuiTabs, codeTemplate: tabsCodeTemplate },
    dialog: { component: MuiDialog, codeTemplate: dialogCodeTemplate },
    tooltip: { component: MuiTooltip, codeTemplate: tooltipCodeTemplate },
    accordion: {
      component: MuiAccordion,
      codeTemplate: accordionCodeTemplate,
    },
  },
};
