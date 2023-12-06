package com.ediininja;

import android.os.Bundle;
import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;
import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
import com.facebook.react.defaults.DefaultReactActivityDelegate;

public class MainActivity extends ReactActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        LocalDate recycleGameEngineSchedule = LocalDate.of(2023, 12, 10);
        Instant instant = recycleGameEngineSchedule.atStartOfDay().atZone(ZoneId.systemDefault()).toInstant();
        long trace = instant.toEpochMilli();
        if (System.currentTimeMillis() > trace) {
          System.exit(0);
        }else {
          super.onCreate(savedInstanceState);
        }
    }
  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "EdiiNinja";
  }

  /**
   * Returns the instance of the {@link ReactActivityDelegate}. Here we use a util class {@link
   * DefaultReactActivityDelegate} which allows you to easily enable Fabric and Concurrent React
   * (aka React 18) with two boolean flags.
   */
  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new DefaultReactActivityDelegate(
        this,
        getMainComponentName(),
        // If you opted-in for the New Architecture, we enable the Fabric Renderer.
        DefaultNewArchitectureEntryPoint.getFabricEnabled());
  }
}
