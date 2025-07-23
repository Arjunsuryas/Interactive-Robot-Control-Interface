import React, { useState, useEffect } from 'react';
import { RobotInterface } from './components/RobotInterface';
import { ControlPanel } from './components/ControlPanel';
import { StatusPanel } from './components/StatusPanel';
import { MissionPanel } from './components/MissionPanel';

function App() {
  const [robotStatus, setRobotStatus] = useState({
    power: true,
    battery: 87,
    mode: 'standby',
    position: { x: 0, y: 0 },
    temperature: 42,
    connectivity: 'excellent',
    lastCommand: 'System initialized',
    tasksCompleted: 247,
    uptime: '12h 34m'
  });

  const [activeCommand, setActiveCommand] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setRobotStatus(prev => ({
        ...prev,
export default App;
