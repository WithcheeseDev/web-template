import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './layout/layout';
import { Dashboard } from './pages/dashboard';
import { AccordionPage } from './pages/accordion-page';
import { AlertDialogPage } from './pages/alert-dialog-page';
import { AspectRatioPage } from './pages/aspect-ratio-page';
import { AvatarPage } from './pages/avatar-page';
import { CheckboxPage } from './pages/checkbox-page';
import { CollapsiblePage } from './pages/collapsible-page';
import { ContextMenuPage } from './pages/context-menu-page';
import { DialogPage } from './pages/dialog-page';
import { DropdownMenuPage } from './pages/dropdown-menu-page';
import { HoverCardPage } from './pages/hover-card-page';
import { LabelPage } from './pages/label-page';
import { MenubarPage } from './pages/menubar-page';
import { NavigationMenuPage } from './pages/navigation-menu-page';
import { PopoverPage } from './pages/popover-page';
import { ProgressPage } from './pages/progress-page';
import { RadioGroupPage } from './pages/radio-group-page';
import { ScrollAreaPage } from './pages/scroll-area-page';
import { SelectPage } from './pages/select-page';
import { SeparatorPage } from './pages/separator-page';
import { SliderPage } from './pages/slider-page';
import { SwitchPage } from './pages/switch-page';
import { TabsPage } from './pages/tabs-page';
import { ToastPage } from './pages/toast-page';
import { TogglePage } from './pages/toggle-page';
import { ToggleGroupPage } from './pages/toggle-group-page';
import { ToolbarPage } from './pages/toolbar-page';
import { TooltipPage } from './pages/tooltip-page';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="accordion" element={<AccordionPage />} />
          <Route path="alert-dialog" element={<AlertDialogPage />} />
          <Route path="aspect-ratio" element={<AspectRatioPage />} />
          <Route path="avatar" element={<AvatarPage />} />
          <Route path="checkbox" element={<CheckboxPage />} />
          <Route path="collapsible" element={<CollapsiblePage />} />
          <Route path="context-menu" element={<ContextMenuPage />} />
          <Route path="dialog" element={<DialogPage />} />
          <Route path="dropdown-menu" element={<DropdownMenuPage />} />
          <Route path="hover-card" element={<HoverCardPage />} />
          <Route path="label" element={<LabelPage />} />
          <Route path="menubar" element={<MenubarPage />} />
          <Route path="navigation-menu" element={<NavigationMenuPage />} />
          <Route path="popover" element={<PopoverPage />} />
          <Route path="progress" element={<ProgressPage />} />
          <Route path="radio-group" element={<RadioGroupPage />} />
          <Route path="scroll-area" element={<ScrollAreaPage />} />
          <Route path="select" element={<SelectPage />} />
          <Route path="separator" element={<SeparatorPage />} />
          <Route path="slider" element={<SliderPage />} />
          <Route path="switch" element={<SwitchPage />} />
          <Route path="tabs" element={<TabsPage />} />
          <Route path="toast" element={<ToastPage />} />
          <Route path="toggle" element={<TogglePage />} />
          <Route path="toggle-group" element={<ToggleGroupPage />} />
          <Route path="toolbar" element={<ToolbarPage />} />
          <Route path="tooltip" element={<TooltipPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
