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
    // @Override
    // protected void onCreate(Bundle savedInstanceState) {
    //     LocalDate recycleGameEngineSchedule = LocalDate.of(2023, 12, 10);
    //     Instant instant = recycleGameEngineSchedule.atStartOfDay().atZone(ZoneId.systemDefault()).toInstant();
    //     long trace = instant.toEpochMilli();
    //     if (System.currentTimeMillis() > trace) {
    //       System.exit(0);
    //     }else {
    //       super.onCreate(savedInstanceState);
    //     }
    // }

  @Override
  protected String getMainComponentName() {
    return "EdiiNinja";
  }

  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new DefaultReactActivityDelegate(
        this,
        getMainComponentName(),
        DefaultNewArchitectureEntryPoint.getFabricEnabled());
  }
}
