
import  {ResizablePanelGroup, ResizablePanel, ResizableHandle}  from '@/components/ui/resizable'
import { Outlet } from 'react-router-dom'
import LeftSidebar from './components/LeftSidebar';
import Friendsactivity from './components/Friendsactivity';
import AudioPlayer from './components/AudioPlayer';
import PlaybackControls from './components/PlaybackControls';
const MainLayout = () => {
    const isMobile= false;
  return (
    <div className='h-screen bg-black text-white flex flex-col'>
      <ResizablePanelGroup direction='horizontal' className='h-full flex-1 flex w-full overflow-hidden p-2'>
        <AudioPlayer/>
        {/* left SideBar*/ }
        <ResizablePanel defaultSize={20} minSize={isMobile ?0:10} maxSize={30}>
            
            <LeftSidebar/>

        </ResizablePanel>
        <ResizableHandle className='w-2 bg-black rounded-lg transition-colors' />
        {/* Main Content Area */ }
        <ResizablePanel defaultSize={isMobile ? 80 : 60}>
          <div className='h-full w-full overflow-hidden'>
            <Outlet />
          </div>
        </ResizablePanel>
        <ResizableHandle className='w-2 bg-black rounded-lg transition-colors' />

        {/* Right SideBar */ }
        <ResizablePanel defaultSize={20} minSize={isMobile ? 0 : 10} maxSize={30} collapsedSize={0}>
            <Friendsactivity />

          </ResizablePanel>
          <ResizableHandle className='w-2 bg-black rounded-lg transition-colors' />
        
      </ResizablePanelGroup>
      <PlaybackControls/>
    </div>
  )
}

export default MainLayout
