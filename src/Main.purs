module Main where

import Prelude
import Control.Monad.Eff (Eff)
import Control.Monad.Eff.Console (CONSOLE, log)

-- Split onto multiple lines with lambdas to show setting a breakpoint on lambda
say :: forall e. String -> String -> String -> Eff (console :: CONSOLE | e) Unit
say a =
  \b ->
    \c -> do
      log
        (a <> b <> c)

main :: forall e. Eff (console :: CONSOLE | e) Unit
main = do
  say "Hello " "World " "!"
  say "Goodbye " "cruel " "world."
