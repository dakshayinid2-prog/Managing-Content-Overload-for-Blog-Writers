@echo off
title BlogPilot AI - Production Build
color 0B

echo.
echo  =============================================
echo   BlogPilot AI - Building for Production
echo  =============================================
echo.

set "PATH=%PATH%;C:\Program Files\nodejs"
cd /d "%~dp0"

echo  [*] Running production build...
call npm run build

echo.
echo  [*] Build complete! Output is in the /dist folder.
echo  [*] To preview: run "npm run preview" or open dist/index.html
echo.

:: Open the dist folder in Explorer
start "" "%~dp0dist"

pause
